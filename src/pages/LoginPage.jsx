import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-smoothGrey h-screen w-screen grid grid-cols-3 grid-rows-1">
      <div className="col-span-1 grid items-center justify-center">
        <h1 className="font-monoton text-7xl text-smoothYellow">
          Smooth
        </h1>
      </div>
      <div className="col-span-1 grid items-center">
        <LoginForm />
      </div>
      <div className="col-span-1 grid items-center justify-center">
        <h1 className="font-monoton text-7xl text-smoothYellow">
          OCP
        </h1>
      </div>
    </div>
  );
}

export default LoginPage;