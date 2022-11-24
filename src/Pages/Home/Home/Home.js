import React from 'react';
import Banner from '../Banner/Banner';
import Categoris from '../Categoris/Categoris';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Categoris></Categoris>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;