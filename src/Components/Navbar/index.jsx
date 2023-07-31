import { ShoppingCartIcon as OutlineShoppingCartIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon as SolidShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4';
  const { cartProducts, openCheckoutSideMenu } = useContext(ShoppingCartContext);

  return (
    <nav className="flex justify-between items-center fixed w-full z-10 py-5 px-8 text-sm font-light top-0 bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='category/clothing'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Clothing
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='category/electronics'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='category/jewelery'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          ffclmauricio@gmail.com
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to='/my-account'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
          >
            Sign In
          </NavLink>
        </li> */}
        <li 
          className="flex items-center cursor-pointer"
          onClick={() => { openCheckoutSideMenu() }}
        >
          {cartProducts.length === 0 ? <OutlineShoppingCartIcon className="w-6 h-6"/> : <SolidShoppingCartIcon className="w-6 h-6"/>} {cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;