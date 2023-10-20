import LoginImg from "../../assets/images/image/logIn.gif"
import LoginIcon from "../../assets/images/icon/login.gif"

import google from "../../assets/images/icon/google.gif"
import github from "../../assets/images/icon/github.gif"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {


    const backgroundStyle = {
        backgroundImage: `url('/src/assets/images/image/wave_right.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };

    const { singIn, googleSingIn } = useContext(AuthContext);
    const location = useLocation();

    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password);


        // sing in user 
        singIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
                toast.success('Sing in SuccessFull')
            })
            .catch(error => {
                console.error(error);
                setLoginError("Invalid Email or Password")
                toast.error('Invalid Email or Password')
            })
    }



    const handleGoogleSingIn = () => {

        googleSingIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
                toast.success('Sing in SuccessFull')
            })
            .catch(error => {
                console.error(error);
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={backgroundStyle} className="h-full">
            <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full bg-white rounded-3xl shadow-2xl shadow-gray-400-500/50">
                        <div className="text-center lg:text-left">
                            <img className="h-[550px] w-[550px] rounded-2xl" src={LoginImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 h-[550px] w-full max-w-md bg-zinc-50">




                            <form onSubmit={handleLogin} className="card-body bg-white">
                                <div>
                                    <h2 className="text-4xl font-bold text-[#ff4c05ec] text-center">Account Login</h2>
                                    <p className="pt-2 ">Does not have an account ? <Link to="/singUp" className="text-[#ff4c05ec] font-bold ">Sing up</Link> </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email Address</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email@example.com" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <p className="text-red-600">{loginError}</p>
                                <button className="form-control btn  rounded-3xl bg-gradient-to-r from-[#ff4c05db] to-[#ffa719d8]">
                                    <div className="flex items-center">
                                        <p className=" text-white">Login Now</p>
                                        <img className="w-12" src={LoginIcon} alt="" />
                                    </div>
                                </button>
                                <div className="mt-2">
                                    <p className="text-center">—————— Or Login With ——————</p>
                                    <div className="flex items-center justify-around mt-4">
                                        <div onClick={handleGoogleSingIn} className="flex items-center gap-2 border border-[#ff4c05db] p-1 px-2 rounded-xl cursor-pointer">
                                            <img className="w-10 " src={google} alt="" />
                                            <p className="font-bold">Google</p>
                                        </div>
                                        <div className="flex items-center gap-2 border border-[#ff4c05db] p-1 px-2 rounded-xl cursor-pointer">
                                            <img className="w-10" src={github} alt="" />
                                            <p className="font-bold">GitHub</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;