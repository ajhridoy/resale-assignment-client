import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const {data: myProducts = []} = useQuery({
        queryKey: ['products/email', user?.email],
        queryFn: () => fetch(`http://localhost:5000/products/email?email=${user?.email}`)
        .then(res => res.json())
    })
    return (
        <div>
            <h2 className='text-3xl font-bold my-8 ml-5'>My Products</h2>    
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Brand Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={product.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>${product.resalePrice}</td>
                <td>
                    <p className='font-bold'>Avaliable</p>
                    <button className="btn btn-sm bg-green-400 hover:bg-green-500 text-black">Advertise</button>
                </td>
                <td>
                <button className="btn btn-sm bg-red-400 hover:bg-red-500 text-black mr-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyProducts;