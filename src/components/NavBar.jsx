import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import Search from "./Search";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "../hooks/useTheme";
import { GlobalContext } from "../context/GlobalContext";

function NavBar() {
  const { changeTheme } = useTheme();
  const { basket, dispatch } = useContext(GlobalContext);
  const totalCount = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="mb-6 bg-gradient-to-r from-[#ee3fc8] to-[#7630ef] py-8">
      <div className="align-elements flex items-center gap-8">
        <div className="flex gap-4">
          <div className="flex  text-white">
            <FaShopify className="text-4xl" />
            <Link className="text-4xl" to="/">
              <h1>Shop</h1>
            </Link>
          </div>
          <NavLink to="/" className="text-4xl text-white">
            <IoMdHome />
          </NavLink>

          <div className="dropdown dropdown-left dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-transparent px-3 py-7 rounded-2xl"
            >
              <IoMenu className="text-4xl text-white" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <NavLink to="/mensShoes">Mens-shoes</NavLink>
              </li>
              <li>
                <NavLink to="/women">Womens-dresses</NavLink>
              </li>
              <li>
                <NavLink to="/decoration">Home Decoration</NavLink>
              </li>
              <li>
                <NavLink to="/sunglasses">Sunglasses</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <Search></Search>
          {/* <ul className="menu menu-horizontal text-2xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul> */}
        </div>

        {/* NAVBAR-END */}

        <div className="flex  gap-6 text-white">
          <NavLink to="/location" className="flex items-center flex-col gap-2">
            <FaMapMarkerAlt className="text-2xl" />
            <span className="opacity-70">Adress</span>
          </NavLink>

          <div className="flex items-center flex-col gap-2">
            <ImUser className="text-2xl" />
            <button
              className="opacity-70"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" }}
            >
              Login
            </button>
            <ul
              className="dropdown menu w-52 rounded-box  shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } 
              }
            >
              <li>
                <a onClick={() => dispatch({ type: "LOGOUT" })}>LOGOUT</a>
              </li>
            </ul>
          </div>
          <NavLink
            to="/basketList"
            className="flex items-center flex-col gap-2"
          >
            <div className="indicator">
              <span className="indicator-item badge w-0.5 badge-secondary text-sm bg-orange-600">
                {totalCount}
              </span>
              <button className="">
                <MdShoppingCart className="text-2xl" />
              </button>
            </div>
            <span className="opacity-70">Cart</span>
          </NavLink>

          <label className="swap swap-rotate">
            <input
              onChange={changeTheme}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
            {/* sun icon */}
            <IoMdSunny className="swap-off h-10 w-10 fill-current" />
            {/* moon icon */}
            <IoMdMoon className="swap-on h-10 w-10 fill-current" />
          </label>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
