import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categoris from '../Categoris/Categoris';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Categoris></Categoris>
          <Advertise></Advertise>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;