import { Link } from "react-router-dom";

const Login = () => {
    return(
        <Link to="/auth/login" className="col-span-2 row-span-1 rounded-3xl flex items-center justify-center bg-smoothGrey text-gray-200 shadow-2xl hover:brightness-125 transition duration-300">
            <h1 className="text-2xl text-smoothWhite font-bold font-poppins">
              Login
            </h1>
          </Link>
    );
}

export default Login;