import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { registerUser } from "../services/authService";
import InputField from './InputField';

const RegistrationForm = ({ handleFeedbackMessage }) => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm({mode: 'onBlur'});
    const [apiError, setApiError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const password = watch('password', '');

    const passwordCriteria = {
        isLongEnough: password.length > 6,
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /\d/.test(password),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    const onSubmit = async (data) => {
        const { confirmPassword, ...dataToSend } = data;
        setIsLoading(true);
        setApiError("");
        try {
            const result = await registerUser(dataToSend);
            reset();   
            handleFeedbackMessage(result.message);
        } catch (error) {
            if (error.status && error.errors) {
                const { status, errors } = error;
                Object.keys(errors).forEach((field) => {
                    setError(field, {
                        field: field,
                        message: errors[field]
                    });
                });               
                handleFeedbackMessage(error.message);
            } else {
                setApiError("An error occurred, please try again.");
                handleFeedbackMessage(apiError);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col font-poppins text-smoothWhite">
            <form onSubmit={handleSubmit(onSubmit)} className="grid justify-items-start space-y-4 p-12">
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
                        },
                        onChange: () => clearErrors()
                    })}

                    errorMessage={errors.userName?.message}
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
                />
                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    register={register("password", {
                        required: "Please enter a password.",
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,}$/,
                            message: `Password must contain at least ${
                                passwordCriteria.isLongEnough ? "" : "6 characters, " 
                            }${
                                passwordCriteria.hasUpperCase ? "" : "one uppercase letter, "
                            }${
                                passwordCriteria.hasLowerCase ? "" : "one lowercase letter, "
                            }${
                                passwordCriteria.hasNumber ? "" : "one number, "
                            }${
                                passwordCriteria.hasSpecialChar ? "" : "one special character"}.` 
                            }
                        })}
                    errorMessage={errors.password?.message}
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
                />
                <div className="w-full pt-5 text-smoothGrey">
                    <button 
                        type="submit" 
                        className={`bg-smoothYellow w-20 p-2 rounded-xl transition duration-200 ease-in-out active:bg-smoothWhite focus:outline-none focus:ring-2 focus:ring-smoothYellow active:text-smoothYellow grid justify-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} `} 
                    >
                        {isLoading ? 
                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-smoothGrey"></div>
                            :
                            <p>Register</p>
                        }
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
