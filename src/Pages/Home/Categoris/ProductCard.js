import React from 'react';

const ProductCard = ({product, setBookingBrand}) => {
    const {condition, decs, img, location, name, originalPrice, postTime, resalePrice, sellerName} = product
    return (
        <div className="card lg:card-side bg-base-200 shadow-xl mx-8 md:mx-20 my-10">
  <figure className='lg:w-2/5'><img className='w-full md:h-96' src={img} alt="Album"/></figure>
  <div className="card-body">
    <div className='flex justify-between'>
    <div><h2 className="text-2xl font-bold">{name}</h2></div>
    <div><p className='font-bold'>Time: {postTime}</p></div>
    </div>
    <p className='text-lg'>{decs}</p>
    <p className='font-medium'>Original Price: <span className='text-orange-500 text-lg'>${originalPrice}</span></p>
    <p className='font-medium'>Resale Price: <span className='text-orange-500 text-lg'>${resalePrice}</span></p>
    <p className='font-medium'>Seller Location: <span className='text-red-500'>{location}</span></p>
    <p className='font-medium'>Laptop Condition: <span className='text-green-700 font-bold'>{condition}</span></p>
    <p className='font-medium'>Seller Name: <span className='text-xl font-bold'>{sellerName}</span></p>
    <div className="card-actions justify-end">
      <label onClick={() => setBookingBrand(product)} htmlFor="booking-modal" className="btn bg-green-400 hover:bg-green-500 text-black">Book Now</label>
    </div>
  </div>
</div>
    );
};

export default ProductCard;