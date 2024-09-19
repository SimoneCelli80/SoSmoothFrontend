import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { registerUser } from "../services/authService";
import InputField from './InputField';

export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({mode: 'onBlur'});
    const [apiError, setApiError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const password = watch('password', '');

    const onSubmit = async (data) => {
        const { confirmPassword, ...dataToSend } = data;
        setIsLoading(true);
        setApiError("");
        try {
            const result = await registerUser(dataToSend);
            console.log(result);
            setIsSuccess(true);
        } catch (error) {
            setApiError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col font-poppins text-smoothWhite">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 p-12">
                <InputField
                    label="Full Name"
                    type="text"
                    name="fullName"
                    register={register("fullName", {
                        required: "Please enter your full name.",
                        maxLength: {
                            value: 20,
                            message: "Full name cannot exceed 20 characters."
                        }
                    })}
                    errorMessage={errors.fullName?.message}
                    apiError={apiError}
                />
                <InputField
                    label="Username"
                    type="text"
                    name="userName"
                    register={register("userName", {
                        required: "Please enter a username.",
                        maxLength: {
                            value: 20,
                            message: "Please use max 20 characters."
                        }
                    })}
                    errorMessage={errors.userName?.message}
                    apiError={apiError}
                />
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    register={register("email", {
                        required: "Please enter your email.",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@sogeti\.com$/,
                            message: "Please enter a valid company email."
                        }
                    })}
                    errorMessage={errors.email?.message}
                    apiError={apiError}
                />
                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    register={register("password", {
                        required: "Please enter a password.",
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,}$/,
                            message: "Password must contain at least 6 characters, one uppercase letter, one number, and one special character."
                        }
                    })}
                    errorMessage={errors.password?.message}
                    apiError={apiError}
                />
                <InputField
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    register={register("confirmPassword", {
                        required: "Please confirm your password.",
                        validate: (value) => value === password || "The passwords don't match. Please check and try again."
                    })}
                    errorMessage={errors.confirmPassword?.message}
                    apiError={apiError}
                />
                <div className="w-full pt-5 text-smoothGrey">
                    <button 
                        type="submit" 
                        className="bg-smoothYellow w-min p-2 rounded-xl transition duration-200 ease-in-out active:bg-smoothWhite focus:outline-none focus:ring-2 focus:ring-smoothYellow focus:text-smoothYellow"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}
