import React, { useEffect } from "react";
import { data } from "..//data.js";
import { useNavigate } from "react-router";
import Filter from "../components/Filter.jsx";
import GetFinalList from "../utils/finalList.js";
import { useParams } from "react-router-dom";

function ProductListing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { category } = useParams();

  const getInitialList = (category) => {
    if (category === "all") {
      return data;
    } else if (category === "women") {
      return data.filter((item) => item.type === category);
    } else if (category === "men") {
      return data.filter((item) => item.type === category);
    } else if (category === "kids") {
      return data.filter((item) => item.type === category);
    } else if (category === "footwear") {
      return data.filter((item) => item.type === category);
    }
  };

  const initialList = getInitialList(category);
  const finalProductList = GetFinalList(initialList);

  const navigate = useNavigate();

  return (
    <div className=" p-2 md:p-14 flex justify-start ">
      <Filter />
      <div className="flex w-[500%] justify-center flex-wrap gap-2 md:gap-12">
        {finalProductList?.map((item) => {
          return (
            <div
              className=" m-4 transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer"
              key={item._id}
              onClick={() => {
                navigate(`/product/${item._id}`);
              }}
            >
              <img
                src={item.img}
                alt="product_image"
                className="w-[13rem] h-[20rem] rounded-md md:w-[20rem] md:h-[30rem] object-cover"
              />
              <div className="p-1"></div>
              <p className="font-medium text-xl ">{item.name}</p>
              <p>{item.product}</p>
              <p className="text-sm my-1 text-gray-400">Rs. {item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListing;
