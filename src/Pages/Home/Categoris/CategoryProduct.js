import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryProduct = () => {
    const category = useLoaderData()
    const {data: products = []} = useQuery({
        queryKey: ['products', category.categoryName],
        queryFn: () => fetch(`http://localhost:5000/products?categoryName=${category.categoryName}`)
        .then(res => res.json())
    })
    console.log(products)
    return (
        <div>
            <h2 className='text-3xl font-bold mt-8 text-center'>All Product of <span className='text-orange-600 uppercase'>{category.categoryName}</span></h2>
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default CategoryProduct;