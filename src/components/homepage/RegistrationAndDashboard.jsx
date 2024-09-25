import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const RegistrationAndDashboard = () => {

    const { authState: { isAuthenticated }, isLoading } = useAuth();

    return(
        <Link to={isAuthenticated ? "/dashboard" : "/auth/registration"} className="col-span-2 row-span-1 rounded-3xl bg-smoothYellow rounded-5xl flex items-center justify-center shadow-2xl hover:brightness-110 transition duration-300">
          <span className="text-smoothGrey text-2xl font-bold font-poppins">
          {isAuthenticated ? "Dashboard" : isLoading ? "Loading" : "Registration"}
          </span>
        </Link>
    );
}

export default RegistrationAndDashboard;