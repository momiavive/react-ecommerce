import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext)

  return (
    <aside className={`${isProductDetailOpen ? "flex" : "hidden"} flex-col fixed right-0 border bg-white border-black rounded-lg overflow-y-auto w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button
          onClick={() => closeProductDetail()}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <figure className="px-6">
        <img 
          className="w-full h-64 rounded-lg"
          src={productToShow.image} 
          alt={productToShow.title} 
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">{productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail;