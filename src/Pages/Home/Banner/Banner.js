import React from 'react';
import laptop from '../../../assets/best-chromebook-laptops-1660750023.jpg'
import laptop2 from '../../../assets/photo-1519389950473-47ba0277781c.jpg'
import laptop3 from '../../../assets/Best-Laptop-Brands-in-World-1.png'

const Banner = () => {
    return (
        <div className="hero md:h-[500px]" style={{ backgroundImage: `url(${laptop3})`, backgroundRepeat: 'no-repeat'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-sm md:max-w-lg" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <h1 className="mb-5 text-3xl md:text-6xl text-yellow-400 font-bold">Buy or Sell Your Laptop</h1>
      <p className="mb-5 md:text-lg text-green-400 font-medium">If you want to buy a second hand laptop or sell your used laptop at a good price then this website is just for you. We provide the best deals to both sellers and buyers.</p>
    </div>
  </div>
</div>
    );
};

export default Banner;