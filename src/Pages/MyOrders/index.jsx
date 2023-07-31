import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"

function MyOrders() {
  const { order } = useContext(ShoppingCartContext)
  
  return (
    <>
      <Layout>
        <div className="flex justify-center items-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>
        {
          order.map(({ id, date, totalPrice, totalProducts }, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                date={date}
                totalPrice={totalPrice}
                totalProducts={totalProducts}
              />
            </Link>
          ))
        }
      </Layout>
    </>
  )
}

export default MyOrders
