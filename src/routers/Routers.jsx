import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import BrandDetails from "../pages/BrandDetails/BrandDetails";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"/brandDetails/:id",
            element:<BrandDetails></BrandDetails>,
            loader:()=> fetch("/brand.json")
        },
      ]
    },
  ]);

  export default router