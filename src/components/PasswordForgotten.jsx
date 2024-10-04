import { requestNewPassword } from "../services/authService";

const PasswordForgotten = () => {

    const [ apiError, setApiError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    const {
        register,
        handleSubmit,
        reset
    } = useForm({mode: 'onSubmit'});

    const onSubmit = async (data) => {
        setApiError(null);
        setIsLoading(true);
        try {
            const result = await requestNewPassword(data.email);
            
        } catch (error) {
            setApiError(error);
        } finally {
            setIsLoading(false);
        }
    } 

    return (
        <div>
            <form>
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    register={register("email", {
                        required: "Please enter your email.",
                    })}
                    position={"justify-center"}
                />
                <div className="pt-5 text-smoothGrey">
                    <button 
                        type="submit" 
                        className="bg-smoothYellow w-20 p-2 rounded-xl transition duration-200 ease-in-out active:bg-smoothWhite focus:outline-none active:ring-2 focus:ring-smoothYellow active:text-smoothYellow"
                    >
                        Request
                    </button>
                    <div>
                        If the email address is registered, you will receive an email with instructions to reset your password.
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PasswordForgotten;