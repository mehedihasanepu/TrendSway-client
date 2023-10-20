import { Outlet } from "react-router-dom"
import Navbar from "./pages/Home/Navbar/Navbar"
import './App.css'
import { Toaster } from "react-hot-toast";
import Footer from "./pages/Home/Footer/Footer";

function App() {

  return (
    <div >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default App
