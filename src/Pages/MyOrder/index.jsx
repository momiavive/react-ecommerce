import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

function MyOrder() {
  const { order } = useContext(ShoppingCartContext)
  const params = useParams()
  const indexPath = isNaN(parseInt(params.id)) ? -1 : parseInt(params.id)
  const orderToShow = order.at(indexPath)
  return (
    <>
      <Layout>
      <div className="flex justify-center items-center relative w-80 mb-6">
          <Link to="/my-orders" className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h1>My Order</h1>
        </div>
        <div className="flex flex-col w-80">
          {
            orderToShow &&
            orderToShow.products.map(product => (
              <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
              />
            ))
          }
        </div>
      </Layout>
    </>
  )
}

export default MyOrder
