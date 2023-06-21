import React, {useState} from "react";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchFilter } from "../store/actions/actions";
function Header() {

  const dispatch = useDispatch();
  const [query, setQuery] = useState('')

  return (
    <div className="border-b-2 border-gray-100 ">
      <div className="p-4 md:px-16 md:py-7 justify-between items-center flex">
      <Link to='/'>
        <img
          src="https://findvectorlogo.com/wp-content/uploads/2019/03/myntra-vector-logo.png"
          className="mix-blend-multiply	h-10"
          alt="logo"
        /></Link>

        <ul className="hidden lg:flex gap-7 cursor-pointer text-md font-medium">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home & Living</li>
          <li>Beauty</li>
          <li>Studio</li>
        </ul>

        <div className=" hidden lg:flex xl:flex  bg-gray-50  items-center w-[33%]  p-2 rounded-md">
          <span className="mr-3">

            <AiOutlineSearch onClick={() => {
              dispatch(setSearchFilter(query))
            }} />
          </span>
          <input
            type="text"
            className="bg-gray-50 w-full"
            placeholder="search for products, brand and more"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <ul className="flex gap-5 text-center text-sm  items-center">
          <li className="p-1 flex-col justify-center cursor-pointer items-center">
            <AiOutlineUser className="md:text-xl " />
            profile
          </li>
          <li className="p-1 flex-col  text-sm  justify-center cursor-pointer items-center">
            <AiOutlineHeart className="md:text-xl" />
            Wishlist
          </li>
          <li className="p-1  text-smflex-col justify-center cursor-pointer items-center">
            <BsBag className="md:text-xl" />
            Bag
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
