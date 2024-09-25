import useAuth from "../../hooks/useAuth";

const Logout = () => {

    const { logout } = useAuth();

    return(
        <button onClick={logout} className="col-span-2 row-span-1 rounded-3xl flex items-center justify-center bg-smoothGrey text-gray-200 shadow-2xl hover:brightness-125 transition duration-300">
            <h1 className="text-2xl text-smoothWhite font-bold font-poppins">
                Logout
            </h1>
        </button>
    );
}

export default Logout;