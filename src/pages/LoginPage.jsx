import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-smoothGrey h-screen w-screen grid grid-cols-5 grid-rows-3 select-none">
      <div className="col-start-2 col-span-2 row-span-3 grid items-center justify-center font-monoton text-8xl text-smoothYellow">
        <div className="grid grid-rows-3 grid-cols-8">
          <div className="row-span-1 col-span-6 pl-9.8rem">
            So
          </div>
          <div className="row-span-1 col-span-6">
            Smooth
          </div>
          <div className="row-span-1 col-span-6 pl-13.5rem">
            OCP
          </div> 
        </div>
      </div>
      <div className="col-span-1 row-span-3  grid items-center justify-center pt-32">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;