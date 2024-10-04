import InputField from "./InputField";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const LoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const {
        register,
        handleSubmit,
        reset
    } = useForm({mode: 'onSubmit'});

    const onSubmit = async (data) => {
        setIsLoading(true);
        setApiError(null);
        try {
           await login(data.email, data.password);
           reset();
           navigate('/');
        } catch (error) {
            if (error.name === "ValidationError" ) {
                /*const { errors } = error;
                Object.keys(errors).forEach((field) => {
                    setError(field, {
                        //type: manual,?
                        field: field,
                        message: "Please enter a valid email-password combination."
                    });
                });*/
                setApiError("Please enter a valid email-password combination.");
            } else {
                setApiError("An error occurred, please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    }


    return(
        <form onSubmit={handleSubmit(onSubmit)} className="text-smoothWhite font-poppins space-y-8 w-full grid justify-items-center" >
            <InputField
                label="Email"
                type="email"
                name="email"
                register={register("email", {
                    required: "Please enter your email.",
                })}
                //errorMessage={errors.email?.message}
                position={"justify-center"}
            />
            <InputField
                label="Password"
                type="password"
                name="password"
                register={register("password", {
                    required: "Please enter your password."
                    })}
                //errorMessage={errors.password?.message}
                position="justify-center"
            />
            {apiError ? <div className="text-red-400">{apiError}</div> : <p>&nbsp;</p>}
            <div className="pt-5 text-smoothGrey">
                <button 
                    type="submit" 
                    className="bg-smoothYellow w-20 p-2 rounded-xl transition duration-200 ease-in-out active:bg-smoothWhite focus:outline-none active:ring-2 focus:ring-smoothYellow active:text-smoothYellow"
                >
                    Login
                </button>
            </div>
            {apiError ? <div className="text-smoothWhite">Password forgotten?</div> : <p>&nbsp;</p>}
        </form>
        
    );

}

export default LoginForm;