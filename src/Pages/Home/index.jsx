import { useContext } from "react"
import { useParams } from "react-router-dom"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  const { category } = useParams()
  const { products, filteredProducts, searchByTitle, setSearchByTitle } = useContext(ShoppingCartContext)

  const renderView = () => {
    let productsToRender = searchByTitle.length > 0 ? filteredProducts : products;
    if (productsToRender?.length > 0) {
      if (category) {
        productsToRender = productsToRender.filter(product => product.category.includes(category))
      }
      return productsToRender.map(product => (
        <Card key={product.id} product={product} />
      ))
    }
    else {
      return <p>No results found</p>
    }
  }

  return (
    <>
      <Layout>
        <div className="flex justify-center items-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>
        <input 
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          type="text" 
          placeholder="Search a product..." 
          onChange={(event) => setSearchByTitle(event.target.value)}/>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <ProductDetail></ProductDetail>
      </Layout>
    </>
  )
}

export default Home
