import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            products.map(product => (
              <Card 
                key={product.id}
                {... product}
              />
            ))
          }
        </div>
      </Layout>
    </>
  )
}

export default Home
