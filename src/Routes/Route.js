import { createBrowserRouter } from "react-router-dom";
import DashboardLaouts from "../Layouts/DashboardLaouts/DashboardLaouts";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllByers from "../Pages/Dashboard/AllByers/AllByers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ReportItems from "../Pages/Dashboard/ReportItems/ReportItems";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CategoryProduct from "../Pages/Home/Categoris/CategoryProduct";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Payments from "../Pages/Payments/Payments";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryProduct></CategoryProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://resale-assignment-server.vercel.app/categories/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLaouts></DashboardLaouts></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allbyers',
                element: <AdminRoute><AllByers></AllByers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportItems></ReportItems></AdminRoute>
            },
            {
                path: '/dashboard/payments/:id',
                element: <BuyerRoute><Payments></Payments></BuyerRoute>,
                loader: ({params}) => fetch(`https://resale-assignment-server.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])