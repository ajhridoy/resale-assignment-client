import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../../SharedPages/DeleteModal/DeleteModal';

const AllSellers = () => {
    const [deleteSeller, setDeleteSeller] = useState(null)
    const {data: sellers = [], isLoading, refetch} = useQuery({
        queryKey: ['/users/buyers'],
        queryFn: () => fetch('http://localhost:5000/users/sellers', {
            headers: {
                authorization: `bearer ${localStorage.getItem('resaleToken')}`
              },
        })
        .then(res => res.json())
    })

    const closeModal = () => {
        setDeleteSeller(null)
    }

    const handleDelete = seller => {
      fetch(`http://localhost:5000/users/${seller._id}`, {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${localStorage.getItem('resaleToken')}`
        },
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          toast.success('This Seller deleted successfully')
          refetch()
        }
      })
    }

    if(isLoading){
        return <div>Loading...</div>
      }
    return (
        <div>
            <h2 className="text-3xl font-bold my-10 ml-3">All Sellers</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify Seller</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => 
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>${seller.email}</td>
                <td><button className="btn btn-sm bg-green-400 hover:bg-green-500 text-black">Verify</button></td>
                <td>
                <label onClick={() => setDeleteSeller(seller)} htmlFor="delete-modal" className="btn btn-sm bg-red-400 hover:bg-red-500 text-black mr-2">Delete</label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {
        deleteSeller && <DeleteModal
        title={'Are you sure for delete'}
        message={`If you delete ${deleteSeller.name} You can't get the data back`}
        closeModal={closeModal}
        deleteAction={handleDelete}
        modalData={deleteSeller}
        ></DeleteModal>
      }
        </div>
    );
};

export default AllSellers;