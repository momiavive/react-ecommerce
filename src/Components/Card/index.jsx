import { PlusIcon } from "@heroicons/react/24/outline"
import { CheckIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"

const Card = ({ product }) => {
  const { category, image, title, price } = product;

  const { 
    count, 
    setCount, 
    openProductDetail, 
    closeProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail()
    setProductToShow(productDetail)
    closeCheckoutSideMenu()
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    setCount(count + 1)
    setCartProducts([... cartProducts, productData])
    openCheckoutSideMenu()
    closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = cartProducts.some(product => product.id === id)
    if (isInCart) {
      return (
        <button 
          className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
        >
          <CheckIcon className="w-5 h-5 text-white" />
        </button>
      )
    }
    else {
      return (
        <button 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, product)}
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      )
    }
  }

  return (
    <div 
      className="bg-white cursor-pointer w-48 h-60 rounded-lg"
      onClick={() => showProduct(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt="headphones" />
        {renderIcon(product.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  )
}

export default Card;