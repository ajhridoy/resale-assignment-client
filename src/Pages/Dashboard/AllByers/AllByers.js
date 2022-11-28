import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../../SharedPages/DeleteModal/DeleteModal';

const AllByers = () => {
    const [deleteBuyer, setDeleteBuyer] = useState(null)

    const {data: buyers = [], isLoading, refetch} = useQuery({
        queryKey: ['/users/buyers'],
        queryFn: () => fetch('https://resale-assignment-server.vercel.app/users/buyers', {
            headers: {
                authorization: `bearer ${localStorage.getItem('resaleToken')}`
              },
        })
        .then(res => res.json())
    })

    const closeModal = () => {
        setDeleteBuyer(null)
    }

    const handleDelete = buyer => {
      fetch(`https://resale-assignment-server.vercel.app/users/${buyer._id}`, {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${localStorage.getItem('resaleToken')}`
        },
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          toast.success('This buyer deleted successfully')
          refetch()
        }
      })
    }

    if(isLoading){
        return <div>Loading...</div>
      }
    return (
        <div>
            <h2 className="text-3xl font-bold my-10 ml-3">All Byers</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => 
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>${buyer.email}</td>
                <td>
                <label onClick={() => setDeleteBuyer(buyer)} htmlFor="delete-modal" className="btn btn-sm bg-red-400 hover:bg-red-500 text-black mr-2">Delete</label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {
        deleteBuyer && <DeleteModal
        title={'Are you sure for delete'}
        message={`If you delete ${deleteBuyer.name} You can't get the data back`}
        closeModal={closeModal}
        deleteAction={handleDelete}
        modalData={deleteBuyer}
        ></DeleteModal>
      }
        </div>
    );
};

export default AllByers;