import React from "react";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-b-2 border-gray-100 ">
      <div className="px-16 py-7 justify-between items-center flex">
      <Link to='/'>
        <img
          src="https://findvectorlogo.com/wp-content/uploads/2019/03/myntra-vector-logo.png"
          className="mix-blend-multiply	h-10"
          alt="logo"
        /></Link>

        <ul className="flex gap-7 cursor-pointer text-md font-medium">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home & Living</li>
          <li>Beauty</li>
          <li>Studio</li>
        </ul>

        <div className="flex bg-gray-50 items-center w-[33%]  p-2 rounded-md">
          <span className="mr-3">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            className="bg-gray-50 w-full"
            placeholder="search for products, brand and more"
          />
        </div>
        <ul className="flex gap-5 cursor-pointer">
          <li className="p-1 flex-col justify-center items-center">
            <AiOutlineUser className="text-xl" />
            profile
          </li>
          <li className="p-1 flex-col justify-center items-center">
            <AiOutlineHeart className="text-xl" />
            Wishlist
          </li>
          <li className="p-1 flex-col justify-center items-center">
            <BsBag className="text-xl" />
            Bag
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
