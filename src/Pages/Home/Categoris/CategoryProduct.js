import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../SharedPages/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from './ProductCard';

const CategoryProduct = () => {
    const category = useLoaderData()
    const [bookingBrand, setBookingBrand] = useState(null)
    const {data: products = [], isLoading} = useQuery({
        queryKey: ['products', category.categoryName],
        queryFn: () => fetch(`https://resale-assignment-server.vercel.app/products?categoryName=${category.categoryName}`)
        .then(res => res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl font-bold mt-8 text-center'>All Product of <span className='text-orange-600 uppercase'>{category.categoryName}</span></h2>
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    setBookingBrand={setBookingBrand}
                ></ProductCard>)
            }
            {
                bookingBrand && <BookingModal
                bookingBrand={bookingBrand}
                setBookingBrand={setBookingBrand}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryProduct;