import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: orders = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () => fetch(url, {
        headers: {
            authorization: `bearer ${localStorage.getItem('resaleToken')}`
        }
    })
    .then((res) => res.json()),
  });
  return (
    <div>
      <h2 className="text-3xl font-bold my-10">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Brand Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={order.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{order.brandName}</td>
                <td>{order.price}</td>
                <td><button className="btn btn-sm bg-green-400 hover:bg-green-500 text-black">Pay</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
