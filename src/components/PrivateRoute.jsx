import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { authState } = useAuth();
    console.log("AuthState in PrivateRoute: ", authState);
    return authState.isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;