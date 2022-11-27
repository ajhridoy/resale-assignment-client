import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvCard from './AdvCard';

const Advertise = () => {
    const {data: advertise = [], isLoading} = useQuery({
        queryKey: ['/products/available'],
        queryFn: () => fetch('http://localhost:5000/products/available')
        .then(res => res.json())
    })
    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <div>
           {
            advertise.length > 0 &&  
            <div className='my-15 mx-12'>
              <h2 className='font-bold text-3xl mb-7 text-center'>Advertise Product</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {
                    advertise.map(product => <AdvCard
                      key={product._id}
                      product={product}
                    ></AdvCard>)
                }
            </div>
            </div>
           }
        </div>
    );
};

export default Advertise;