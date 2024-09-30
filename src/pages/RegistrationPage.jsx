import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const handleFeedbackMessage = (message) => {
        setFeedbackMessage(message);
    }

    return (
        <div className="bg-smoothGrey h-screen w-screen grid grid-cols-5 grid-rows-1 select-none">
            {feedbackMessage === "" ?
                <div>
                    <div className="col-span-2">
                        <h1 className="text-smoothYellow font-monoton text-2xl pt-4 pl-4">
                            Registration
                        </h1>
                        <div>
                            <RegistrationForm handleFeedbackMessage={handleFeedbackMessage} />
                        </div>

                    </div>
                    <div className="col-span-3 flex items-center justify-center ">
                        <div className="grid grid-rows-2 space-y-4">
                        <div className="text-9xl font-monoton text-smoothWhite w-full text-center">
                                SO
                            </div>
                            <div className="text-9xl font-monoton text-smoothWhite w-full text-center">
                                SMOOTH
                            </div>
                            <div className="text-9xl font-monoton text-smoothWhite w-full text-center">
                                OCP
                            </div>
                        </div>           
                    </div>
                </div>    
            :
                <div className="col-span-5 text-smoothWhite text-4xl font-poppins text-center self-center">
                    <p>
                        {feedbackMessage}
                    </p>
                    /the button has to have an onclick with navigate home and clean the feedbackMessage 
                    <button className="w-40 h-20 bg-smoothWhite rounded-3xl text-smoothGrey mt-20 active:bg-smoothGrey focus:outline-none active:ring-2 active:ring-smoothWhite active:text-smoothWhite self-end">
                        Home
                    </button>
                </div>
            }
        </div>
    )
}

export default RegistrationPage;