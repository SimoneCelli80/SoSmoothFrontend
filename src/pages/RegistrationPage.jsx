import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
    return (
        <div className="bg-smoothGrey h-screen w-screen grid grid-cols-5 grid-rows-1">
            <div className="col-span-2">
                <h1 className="text-smoothYellow font-monoton text-2xl pt-4 pl-4">
                    Registration
                </h1>
                <div>
                    <RegistrationForm />
                </div>

            </div>
            <div className="col-span-3 flex items-center justify-center ">
                <div className="grid grid-rows-2 space-y-4">
                    <div className="text-9xl font-monoton text-smoothWhite w-full text-center">
                        SMOOTH
                    </div>
                    <div className="text-9xl font-monoton text-smoothWhite w-full text-center">
                        OCP
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage;