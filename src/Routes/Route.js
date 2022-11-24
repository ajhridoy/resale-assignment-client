import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CategoryProduct from "../Pages/Home/Categoris/CategoryProduct";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryProduct></CategoryProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }
])