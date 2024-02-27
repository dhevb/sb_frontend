import { useState } from 'react';
import { MdAccountCircle, MdOutlineFavorite } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Perform search action here
    console.log('Search query:', searchQuery);
    // You can implement search logic or navigate to search results page here
  };

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
                <a>BOOKS</a>
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
                <a>STATIONARY</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>BOOKS</a>
            </li>
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
              <a>STATIONARY</a>
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
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Books</option>
              <option>Decoration</option>
              <option>Stationary</option>
            </select>
            <div className="indicator">
              <button className="btn join-item btn-success" onClick={handleSearch}>
                <CiSearch className="w-6 h-6 text-white"/>
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-end p-1">
          <a className="text-2xl p-3">
            <FaCartShopping></FaCartShopping>
          </a>
          <Link to="/cart">
            <span className="inline-flex items-center rounded-md bg-green-50 py-1 px-2 -ml-4 mb-6 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              1
            </span>
          </Link>
          <a className="text-2xl p-3">
            <MdOutlineFavorite></MdOutlineFavorite>
          </a>
          <button>
            <a className="text-2xl p-3" href="/login">
              <MdAccountCircle></MdAccountCircle>
            </a>
          </button>
        </div>
      </div>

      {/* search bar for small screen starts */}
      <div className="flex item-center justify-center sm:hidden ">
        <div className="join ">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <select className="select select-bordered join-item hidden">
            <option disabled selected>
              Filter
            </option>
            <option>Books</option>
            <option>Decoration</option>
            <option>Stationary</option>
          </select>
          <div className="indicator">
          <CiSearch>
            <button className="btn join-item btn-success" onClick={handleSearch}>
            </button>
            </CiSearch>
          </div>
        </div>
        <hr></hr>
      </div>
      {/* search bar for small screen ends */}
    </div>
  );
}
