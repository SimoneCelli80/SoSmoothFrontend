const InputField = ({ label, type, register, errorMessage, position }) => (
    <div>
        <div className={`w-full grid ${position}`}>
            <label className="">
                <div className="mr-5">{label}</div>
                <input className="text-smoothGrey p-1 items-center" type={type} {...register} />
            </label>
        </div>
            <div>
                {errorMessage ? (<p role="alert" className="text-red-400">{errorMessage}</p>) : <p>&nbsp;</p>}          
            </div>
    </div>

)

export default InputField;