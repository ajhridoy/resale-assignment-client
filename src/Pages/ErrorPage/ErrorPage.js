import React from "react";
import { Link, useRouteError } from "react-router-dom";
// import {image} from '../../assets/istockphoto-687810238-170667a.jpg'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
        <img className="mx-auto my-6" src='https://media.istockphoto.com/id/687810238/photo/pug-dog-with-yellow-constructor-safety-helmet-and-cone-and-404-error-and-dead-end-sign-on.jpg?b=1&s=170667a&w=0&k=20&c=xDoF6tCPAMDUIdr_2pSsi6Pm8dtDxCyhQpYyNvskDyY=' alt="error" />
      <div>
        <h1 className="font-bold text-3xl md:text-6xl text-center mb-4">Oops!</h1>
        <p className="font-bold text-xl md:text-2xl text-orange-400 text-center mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="font-bold text-lg text-red-600 text-center">
          <i>{error.statusText || error.message}</i>
        </p>
        <div className="flex flex-col justify-center items-center mt-4">
        <Link to='/'><button className="btn bg-green-400 hover:bg-green-500 text-black">Back to Home Page</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
