import { ChevronRightIcon, ShoppingCartIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"

const OrdersCard = ({ date, totalPrice, totalProducts }) => {

  return (
    // <div className="flex justify-between items-center mb-2 border border-black rounded-lg p-3">
    //   <div className="flex items-center justify-between grow gap-2 px-4">
    //     <div className="flex gap-1 items-center justify-center">
    //       <ShoppingCartIcon className="h-6 w-6 text-black" />
    //       <span className="font-light text-sm">{`${totalProducts} ${totalProducts === 1 ? "product" : "products"}`}</span>
    //     </div>
    //     <div className="flex gap-1 items-center justify-center">
    //       <CurrencyDollarIcon className="h-6 w-6 text-black" />
    //       <span className="font-light text-sm">{totalPrice}</span>
    //     </div>
    //     <div className="flex gap-1 items-center justify-center">
    //       <CalendarDaysIcon className="h-6 w-6 text-black"/>
    //       <span className="font-light text-sm">{date}</span>
    //     </div>
    //   </div>
    //   <div className="flex items-center gap-2">
    //     <ChevronRightIcon className="h-6 w-6 text-black"/>
    //   </div>
    // </div>
    <div className="flex justify-center items-center mb-3 border border-black p-4 w-80 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="flex gap-2 mb-3">
            <CalendarDaysIcon className="h-6 w-6 text-black" />
            <span className="font-light">{date}</span>
          </span>
          <span className="flex gap-2">
            <ShoppingCartIcon className="h-6 w-6 text-black" />
            <span className="font-light">{`${totalProducts} ${totalProducts === 1 ? "article" : "articles"}`}</span>
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard