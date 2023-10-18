import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import AddProduct from "../pages/AddProduct/AddProduct";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: "/brandDetails/:id",
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch("/brand.json")
            },
        ]
    },
]);

export default router