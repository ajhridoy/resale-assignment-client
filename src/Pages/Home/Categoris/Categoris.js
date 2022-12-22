import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../SharedPages/Loading/Loading';
import Category from './Category';

const Categoris = () => {
    const {data: categories = [], isLoading} = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch('https://resale-assignment-server.vercel.app/categories')
        .then(res => res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='my-10'>
            <h2 className='text-4xl text-center font-bold mb-10'>Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-14 p-4'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categoris;