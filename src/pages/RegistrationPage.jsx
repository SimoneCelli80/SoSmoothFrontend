import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSuccess = (boolean) => {
        setIsSuccess(boolean);
    }

    return (
        <div className="bg-smoothGrey h-screen w-screen grid grid-cols-5 grid-rows-1 select-none">
            <div className="col-span-2">
                <h1 className="text-smoothYellow font-monoton text-2xl pt-4 pl-4">
                    Registration
                </h1>
                <div>
                    <RegistrationForm handleSuccess={handleSuccess} />
                </div>

            </div>
            <div className="col-span-3 flex items-center justify-center ">
                    {isSuccess ?
                        <div className="grid grid-rows-2 space-y-4">
                            <div className="text-8xl font-monoton text-smoothWhite w-full text-center">
                                Registration
                            </div>
                            <div className="text-8xl font-monoton text-smoothWhite w-full text-center">
                                Success!
                            </div>
                        </div>
                    :
                    <div className="grid grid-rows-2 space-y-4">
                        <div className="text-9xl font-monoton text-smoothWhite w-full text-center">
                            SMOOTH
                        </div>
                        <div className="text-9xl font-monoton text-smoothWhite w-full text-center">
                            OCP
                        </div>
                    </div>
                    }
                    
            </div>
        </div>
    )
}

export default RegistrationPage;