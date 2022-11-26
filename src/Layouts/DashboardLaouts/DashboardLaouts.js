import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import Footer from "../../SharedPages/Footer/Footer";
import Header from "../../SharedPages/Header/Header";

const DashboardLaouts = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
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
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard'>My Orders</Link>
            </li>
            {
                isAdmin && <>
                    <li>
              <Link>All Buyers</Link>
            </li>
            <li>
              <Link>All sellers</Link>
            </li>
            <li>
              <Link>Reported Items</Link>
            </li>
                </>
            }

            {
                isSeller && <>
                <li>
              <Link to='/dashboard/myproducts'>My Products</Link>
            </li>
                <li>
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
