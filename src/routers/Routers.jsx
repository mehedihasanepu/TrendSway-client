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
import Login from "../pages/LogIn/LogIn";
import SingUp from "../pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Errorpage from "../Errorpage/Errorpage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/brandDetails/:id",
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch("/brand.json")
            },
            {
                path: "/brandProductDetails/:id",
                element: <PrivateRoute><BrandProductDetails></BrandProductDetails></PrivateRoute>,
                loader: () => fetch("https://trend-sway-server.vercel.app/products")
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: () => fetch("https://trend-sway-server.vercel.app/carts")
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            }
        ]
    },
]);

export default router