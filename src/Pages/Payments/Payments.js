import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheackoutForm from './CheackoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
console.log(stripePromise)
const Payments = () => {
    const bookingData = useLoaderData()
    const {brandName, price} = bookingData
    return (
        <div>
            <h3 className="text-3xl font-bold my-8 ml-3">Payments for <span className='text-orange-600'>{brandName}</span></h3>
            <p className='text-lg'>Please pay <span className='font-bold'>${price}</span> for parchesing this product</p>
            <div className='w-96 mt-8'>
            <Elements stripe={stripePromise}>
            <CheackoutForm
                bookingData={bookingData}
            ></CheackoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payments;