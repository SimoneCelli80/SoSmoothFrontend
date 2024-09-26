import { useLocation } from "react-router";
import { useState, useEffect } from "react";

const ConfirmEmail = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(token) {
            const confirmEmail = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/api/confirm?token=${token}`, {
                        method: 'GET'
                    });  
                    if (response.ok) {
                        setIsSuccess(true);
                        console.log("questo")
                    } else if (response.status === 404 || response.status === 410) {
                        const errorData = await response.json();
                        setErrorMessage(errorData.message);
                    }
                } catch (error) {
                    setErrorMessage("Network error, please try again.");
                } finally {
                    setIsLoading(false);
                }
            }
            confirmEmail();    
        }
    },[])

    return(
        <div>
            {isLoading ?
                <p>Verifying your email...</p>
            :
            isSuccess ?
                <p>Bravo hai confermato la email!!</p>
            :
                <p>{errorMessage}</p>
            }
        </div>
    );
}

export default ConfirmEmail;