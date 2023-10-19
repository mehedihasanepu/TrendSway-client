import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandProductDetails from "../pages/BrandProductDetails/BrandProductDetails";
import Cart from "../pages/Cart/Cart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";




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
                path:'/update/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/brandDetails/:id",
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch("/brand.json")
            },
            {
                path: "/brandProductDetails/:id",
                element: <BrandProductDetails></BrandProductDetails>,
                loader: () => fetch("https://trend-sway-server.vercel.app/products")
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
                loader: () => fetch("https://trend-sway-server.vercel.app/carts")
            }
        ]
    },
]);

export default router