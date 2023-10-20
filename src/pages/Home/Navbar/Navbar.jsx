import { Link, NavLink } from "react-router-dom";
import UserProfile from "../../../component/UserProfile/UserProfile";
import logo from "../../../assets/images/image/logo.png";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProvider";
import singInIcon from "../../../assets/images/icon/singIn.gif"
import singOutIcon from "../../../assets/images/icon/singOut.gif"
import logInIcon from "../../../assets/images/icon/login.gif"


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)


    const handleSingOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                toast.success('Sing Out SuccessFull')
            })
    }

    const navLink = <>
        <NavLink className="btn btn-sm mr-5" to="/">Home</NavLink>
        <NavLink className="btn btn-sm mr-5" to="/addProduct">Add Product</NavLink>
        <NavLink className="btn btn-sm mr-72" to="/cart">My Cart</NavLink>
        {
            user ?
                <button onClick={handleSingOut} className="lg:hidden text-xl font-semibold p-2 px-4 rounded-lg lg:mr-10">Sing out</button>
                :
                <>
                    <NavLink className="lg:hidden text-xl font-semibold p-2 px-4 rounded-lg lg:mr-10" to="/login">Login</NavLink>

                    <NavLink className=" lg:hidden text-xl font-semibold p-2 px-4 rounded-lg lg:mr-10" to="/register">Register</NavLink>
                </>
        }



    </>


    return (
        <div className="max-w-screen-xl mx-auto mb-1 rounded-b-2xl border-b-8 border-x-2 border-gray-300">
            <div  >
                <div className={`flex flex-row items-center md:px-5 justify-between `}>

                    <div>
                        <img className="w-36 h-20" src={logo} alt="" />
                    </div>
                    <div className="lg:hidden flex">
                        <UserProfile></UserProfile>
                        <div className=" dropdown flex-row-reverse">
                            <label tabIndex={0} className="px-1">
                                <label className="btn btn-circle swap swap-rotate">
                                    <input type="checkbox" />
                                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                                </label>
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content w-44 mt-3 gap-3 z-[2] p-2 shadow relative right-1 bg-white bg-opacity-70 rounded-box flex-row-reverse ">
                                {
                                    navLink
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-center hidden lg:flex lg:items-center">
                        <ul >
                            {
                                navLink
                            }
                        </ul>
                        <UserProfile></UserProfile>
                        {
                            user ?
                                <div >
                                    <button onClick={handleSingOut} className="form-control btn ">
                                        <div className="flex items-center">
                                            <p >Sing Out</p>
                                            <img className="w-10" src={singOutIcon} alt="" />
                                        </div>
                                    </button>
                                </div>

                                :
                                <div className="space-x-2">
                                    <Link className="btn " to="/login">
                                        <div className=" flex items-center">
                                            <button className=" text-lg">Log In</button>
                                            <img className="w-12" src={logInIcon} alt="" />
                                        </div>
                                    </Link>
                                    <Link className=" btn " to="/singUp">
                                        <div className=" flex items-center">
                                            <button className=" text-lg">Sing Up</button>
                                            <img className="w-12" src={singInIcon} alt="" />
                                        </div>
                                    </Link>


                                </div >
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;