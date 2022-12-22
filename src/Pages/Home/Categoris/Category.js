import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { categoryName, img, _id } = category;
  return (
    <div className="card card-compact bg-base-100 shadow-xl" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
      <figure>
        <img className="h-[300px] w-full" src={img} alt="Shoes" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500"/>
      </figure>
      <div className="card-body">
        <h2 className="text-center my-4"><span className="font-bold text-xl">Brand Name:</span> <span className="text-orange-500 font-bold text-xl uppercase">{categoryName}</span></h2>
        <div className="card-actions justify-center">
          <Link to={`/category/${_id}`}><button className="btn bg-green-400 hover:bg-green-500 text-black">See All Products <span className="ml-2"><FaArrowRight></FaArrowRight></span></button></Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
