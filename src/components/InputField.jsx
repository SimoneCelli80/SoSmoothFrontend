const InputField = ({ label, type, register, errorMessage, apiError }) => (
    <div>
        <label>
            <div className="mr-5">{label}</div>
            <input className="text-smoothGrey p-1 " type={type} {...register} />
        </label>
            {errorMessage ? (<p role="alert" className="text-red-400">{errorMessage}</p>) : apiError!== "" ? (<p role="alert" className="text-red-400">{apiError}</p>) : <p>&nbsp;</p>}
    </div>

)

export default InputField;