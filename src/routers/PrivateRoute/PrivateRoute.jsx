/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import loadingIcon from "../../assets/images/icon/loading.gif"


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex  items-center justify-center  h-[70vh]">
            <img src={loadingIcon} alt="" />
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;