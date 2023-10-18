// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";

const UserProfile = () => {

    // const { user } = useContext(AuthContext)
    return (
        <div>
            {/* {
                user &&
                <div className="dropdown dropdown-end pr-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ffeace] rounded-box ">
                        <li>
                            <p>{user.displayName}</p>
                        </li>
                        <li>
                            <p>{user.email}</p>
                        </li>
                    </ul>
                </div>
            } */}
        </div>
    );
};

export default UserProfile;