import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useBuyer from "../../hooks/useBuyer";
import useSeller from "../../hooks/useSeller";
import Footer from "../../SharedPages/Footer/Footer";
import Header from "../../SharedPages/Header/Header";

const DashboardLaouts = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {
              isBuyer && <>
              <li className="bg-green-500 rounded-lg text-black font-bold mb-3 mx-2">
              <Link to='/dashboard/myorders'>My Orders</Link>
            </li>
              </>
            }
            {
                isAdmin && <>
                    <li className="bg-green-500 rounded-lg text-black font-bold mb-3 mx-2">
              <Link to='/dashboard/allbyers'>All Buyers</Link>
            </li>
            <li className="bg-green-500 rounded-lg text-black font-bold mb-3 mx-2">
              <Link to='/dashboard/allsellers'>All sellers</Link>
            </li>
            <li className="bg-green-500 rounded-lg text-black font-bold mb-3 mx-2">
              <Link to='/dashboard/reportedItems'>Reported Items</Link>
            </li>
                </>
            }

            {
                isSeller && <>
                <li className="bg-green-500 rounded-lg text-black font-bold mb-3 mx-2">
              <Link to='/dashboard/myproducts'>My Products</Link>
            </li>
                <li className="bg-green-500 rounded-lg text-black font-bold mb-3 mx-2">
              <Link to='/dashboard/addProduct'>Add Product</Link>
            </li>
                </>
            }
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLaouts;
