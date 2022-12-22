import React from 'react';

const AdvCard = ({product}) => {
    const {img, name, categoryName} = product
    return (
        <div className="card h-96 card-compact bg-base-100 shadow-xl" data-aos="zoom-out-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500">
  <figure className='h-2/3'><img className='w-full' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-bold text-xl'>Category: <span className='font-bold font-lg text-orange-400 uppercase'>{categoryName}</span></p>
    <p className='text-lg'>If you want to buy this product please go to the <span className='font-bold font-lg text-orange-400 uppercase'>{categoryName}</span> Category and buy this..!!</p>
  </div>
</div>
    );
};

export default AdvCard;