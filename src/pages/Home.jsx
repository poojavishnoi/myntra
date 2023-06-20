import React from "react";
import HomeImg from "../images/home.jpg";
import { Link } from "react-router-dom";

function Home() {


  return (
    <div className="p-6">
      <div className="flex justify-center">
        <img
          src={HomeImg}
          className=" md:w-[80%] rounded-xl object-cover "
          alt="home_img"
        />
      </div>

      <div className=" p-7 m-14 rounded-md text-center">
        <Link to='/all' className=" text-white bg-zinc-900 rounded-xl px-16 py-4 text-xl">
          View all
        </Link>
        <div className="flex gap-5 flex-wrap justify-between my-20 ">
          {/* <div className="relative"><img className='rounded-md' src="https://img.freepik.com/premium-photo/image-pretty-woman-stylist-posing-isolated_171337-72519.jpg?" alt="" />
      <p className='absolute bottom-0 left-[30%] font-bold text-white text-2xl'>Women Clothing</p></div> */}
          <div className="relative  transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer">
            <img
              src="https://img.freepik.com/premium-photo/image-pretty-woman-stylist-posing-isolated_171337-72519.jpg?"
              alt="clothing"
              className="rounded-md"
            />
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-800 to-transparent  flex justify-center items-center">
              <p className="text-white text-2xl font-bold">Women's Clothing</p>
            </div>
          </div>
          <div className="relative transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer ">
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/full-length-portrait-handsome-serious-man_171337-17388.jpg?size=626&ext=jpg"
              alt="clothing"
            />
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-800 to-transparent  flex justify-center items-center">
              <p className="text-white text-2xl font-bold">Men's Clothing</p>
            </div>
          </div>{" "}
          <div className="relative transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer">
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/low-angle-little-boy-posing_23-2148445671.jpg?size=626&ext=jpg"
              alt="clothing"
            />
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-800 to-transparent  flex justify-center items-center">
              <p className="text-white text-2xl font-bold">Kid's Clothing</p>
            </div>
          </div>{" "}
          <div className="relative transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer">
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/rack-full-shoes-modern-house_1268-14356.jpg?size=626&ext=jpg"
              alt="footwear"
            />
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-800 to-transparent  flex justify-center items-center">
              <p className="text-white text-2xl font-bold">Foot Wear</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
