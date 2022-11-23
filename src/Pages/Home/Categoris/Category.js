import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Category = ({ category }) => {
  const { categoryName, img } = category;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-[300px] w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center my-4"><span className="font-bold text-xl">Brand Name:</span> <span className="text-orange-500 font-bold text-xl">{categoryName}</span></h2>
        <div className="card-actions justify-center">
          <button className="btn bg-green-400 hover:bg-green-500 text-black">See All Products <span className="ml-2"><FaArrowRight></FaArrowRight></span></button>
        </div>
      </div>
    </div>
  );
};

export default Category;