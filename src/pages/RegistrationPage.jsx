import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import { useNavigate } from "react-router";

const RegistrationPage = () => {
    const [feedbackMessage, setFeedbackMessage] = useState({isPresent: false, isSuccess: false, message: ""});
    const navigate = useNavigate();

    const handleFeedbackMessage = (isPresent, isSuccess, message) => {
        setFeedbackMessage({isPresent: isPresent, isSuccess: isSuccess, message: message});
        console.log(feedbackMessage);
    }

    const handleButtonClick = () => {
        setFeedbackMessage({isPresent: false, isSuccess: false, message: "" });
        navigate("/");
    }
    
    return (
        <div>
            {!feedbackMessage.isSuccess ?
                <div className="bg-smoothGrey h-screen w-screen grid grid-cols-5 grid-rows-1 select-none">
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
                                <div className="text-9xl font-monoton text-smoothWhite w-full pl-11rem">
                                    SO
                                </div>
                                <div className="text-9xl font-monoton text-smoothWhite w-full text-center">
                                    SMOOTH
                                </div>
                                <div className="text-9xl font-monoton text-smoothWhite w-full pl-16.5rem">
                                    OCP
                                </div>
                            </div>           
                        
                    </div>                       
                </div>    
            :
                <div className="bg-smoothGrey h-screen w-screen grid grid-cols-5 grid-rows-1 select-none">
                    <div className="col-span-3 col-start-2 text-smoothWhite text-3xl font-poppins text-center self-center">
                        <p className=""> 
                            {feedbackMessage.message}
                        </p>
                        <button onClick={handleButtonClick} className="w-40 h-20 bg-smoothWhite rounded-3xl text-smoothGrey mt-20 active:bg-smoothGrey focus:outline-none active:ring-2 active:ring-smoothWhite active:text-smoothWhite self-end">
                            Home
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default RegistrationPage;