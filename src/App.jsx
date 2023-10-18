import { Outlet } from "react-router-dom"
import Navbar from "./pages/Home/Navbar/Navbar"

function App() {

  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
