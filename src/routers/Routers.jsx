import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandProductDetails from "../pages/BrandProductDetails/BrandProductDetails";
import Cart from "../pages/Cart/Cart";




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
                element: <AddProduct></AddProduct>
            },
            {
                path: "/brandDetails/:id",
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch("/brand.json")
            },
            {
                path: "/brandProductDetails/:id",
                element: <BrandProductDetails></BrandProductDetails>,
                loader: () => fetch("http://localhost:5000/products")
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }
        ]
    },
]);

export default router