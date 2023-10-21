import { HiOutlineEmojiSad } from "react-icons/hi";
import { Link } from "react-router-dom";
const Errorpage = () => {
    return (
        <div className="flex justify-center items-center gap-5 h-[100vh]">


            <div >
                <HiOutlineEmojiSad className="text-[250px]"></HiOutlineEmojiSad>
            </div>


            <div>

                <h1 className="text-7xl font-extrabold">404</h1>
                <h1 className="text-3xl font-bold">ERROR - PAGE NOT FOUND</h1>
                <h1 className="text-2xl">Something was wrong.</h1>
            <Link to={"/"} className="card-actions  ">
                <button className="btn bg-gradient-to-r  text-white w-full rounded-xl ">Go to Home</button>
            </Link>
            </div>
        </div>
    );
};

export default Errorpage;