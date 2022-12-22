import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../../SharedPages/DeleteModal/DeleteModal';
import Loading from '../../../SharedPages/Loading/Loading';

const ReportItems = () => {
    const [deleteReportProduct, setDeleteReportProduct] = useState(null)
    const {data: reportedItems = [], refetch, isLoading} = useQuery({
        queryKey: ['/products/report'],
        queryFn: () => fetch('https://resale-assignment-server.vercel.app/products/report', {
            headers: {
                authorization: `bearer ${localStorage.getItem('resaleToken')}`
            },
        })
        .then(res => res.json())
    })

    const closeModal = () => {
        setDeleteReportProduct(null)
    }

    const handleDelete = report => {
      fetch(`https://resale-assignment-server.vercel.app/product/${report._id}`, {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${localStorage.getItem('resaleToken')}`
        },
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          toast.success('This Reported product deleted successfully')
          refetch()
        }
      })
    }

    if(isLoading){
      return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl font-bold my-8 ml-3">Reported Items</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {reportedItems.map((report, i) => 
              <tr key={report._id}>
                <th>{i + 1}</th>
                <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={report.img} alt="" />
                    </div>
                  </div>
                </td>
                <td className='font-bold'>{report.name}</td>
                <td>
                <label onClick={() => setDeleteReportProduct(report)} htmlFor="delete-modal" className="btn btn-sm bg-red-400 hover:bg-red-500 text-black mr-2">Delete</label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {
        deleteReportProduct && <DeleteModal
        title={'Are you sure for delete'}
        message={`If you delete ${deleteReportProduct.name} You can't get the Product back`}
        closeModal={closeModal}
        deleteAction={handleDelete}
        modalData={deleteReportProduct}
        ></DeleteModal>
      }
        </div>
    );
};

export default ReportItems;