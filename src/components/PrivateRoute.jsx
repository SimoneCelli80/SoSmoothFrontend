import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { authState } = useAuth();
    return authState.isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;