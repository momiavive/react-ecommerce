import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart - Increment Quantity
  const [count, setCount] = useState(0)

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false)

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({ title: "", price: "", description: "" })

  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart - Order
  const [order, setOrder] = useState([])

  // Get Products
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  // Get Products by title
  const [searchByTitle, setSearchByTitle] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  
  const filterProductsByTitle = (products, searchByTitle) => {
    return products.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredProducts(filterProductsByTitle(products, searchByTitle))
  }, [products, searchByTitle])

  return (
    <ShoppingCartContext.Provider 
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredProducts
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider };