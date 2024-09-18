const InputField = ({ label, type, register, errorMessage }) => (
    <div>
        <label>
            <div className="mr-5">{label}</div>
            <input className="text-smoothGrey p-1 " type={type} {...register} />
        </label>
            {errorMessage ? (<p role="alert" className="text-red-400">{errorMessage}</p>) : <p>&nbsp;</p>}
    </div>

)

export default InputField;