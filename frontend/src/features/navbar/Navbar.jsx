import { MdAccountCircle,} from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
import { selectItems } from "../cart/cartSlice";
import logo from "../../assets/logo.png"


export default function Navbar() {

const items = useSelector(selectItems);

  return (
    <div>
      {/* navbar */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to = '/all-products'>
                <a>All Products</a>
                </Link>
              </li>
              <li>
                <a>DECORATION</a>
                <ul className="p-2">
                  <li>
                    <a>Diye</a>
                  </li>
                  <li>
                    <a>Colors</a>
                  </li>
                </ul>
              </li>
              <li>
              <Link to = '/about-us'>
                <a>About us</a>
                </Link>
              </li>
            </ul>
          </div>
          <Link to = "/">
          <div className="w-24 h-24 pl-4">
           <img src={logo} alt="logo" />
          </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-10">
            <Link to = "/all-products">
            <li>
              <Link to = "/all-products">
              <a>All Products</a>
              </Link>
            </li>
            </Link>
            <li>
              <details>
                <summary>DECORATION</summary>
                <ul className="p-2">
                  <li>
                    <a>DIYE</a>
                  </li>
                  <li>
                    <a>COLORS</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
            <Link to = '/about-us'>
                <a>About us</a>
                </Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:block">
          <div className="join mr-10  ">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <Link to = "/all-products">
              <option>All Products</option>
              </Link>
              <option>Decoration</option>
              <option>Stationary</option>
            </select>
            <div className="indicator">
              <button className="btn join-item btn-success"><CiSearch className="w-6 h-6 text-white"/></button>
            </div>
          </div>
        </div>

        <div className="navbar-end pr-6">
          <div className="flex sm:bg-base-200 bg-none px-2 md:px-6 rounded-lg">
        <Link 
        to = "/cart">
          <a className="text-2xl p-3 hover:text-orange-400">
            <FaCartShopping></FaCartShopping>
          </a>
          </Link>
      <Link 
          to = "/cart">   
      {items.length>0 && <span className="inline-flex items-center rounded-md bg-green-50 py-1 px-2 -ml-4 mb-6 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
      {items.length}
    </span>}
        </Link>
        
        <Link to = "/orders">
          <div className="mx-4">
          <a className="text-2xl p-3 hover:text-orange-400">
          <MdOutlineProductionQuantityLimits />
          </a>
          </div>
        </Link>  

          <Link to = '/login'>
          <a className="text-2xl p-3 hover:text-orange-400" href="/login">
            <MdAccountCircle></MdAccountCircle>
          </a>
          </Link>
        </div>
      </div>
      </div>

      {/* search bar for small screen starts */}
      <div className="flex item-center justify-center  sm:hidden ">
      <div className="join ">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <select className="select select-bordered join-item hidden">
          <option disabled selected>
            Filter
          </option>
          <option>Books</option>
          <option>Decoration</option>
          <option>About us</option>
        </select>
        <div className="indicator">
          <button className="btn join-item btn-success"><CiSearch></CiSearch></button>
        </div>
      </div>
      <hr></hr>
      </div>
      {/* search bar for small screen ends */}
    </div>
  );
}
