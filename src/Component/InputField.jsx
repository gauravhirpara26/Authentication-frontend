import { useState } from "react"
import { FiAlertCircle, FiEye, FiEyeOff } from "react-icons/fi";

const InputField = ({ label, type = 'text', name, value, onChange, placeholder, error }) => {
    const [showpassword, setShowpassword] = useState(false)

    const isPassword = type === 'password'

    const inputType = isPassword && showpassword ? "text" : type

    return (
        <>
            <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                </label>
                <div className="relative">
                    <input type={inputType} name={name} value={value} onChange={onChange} placeholder={placeholder} className={`w-full rounded-xl border px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
`} />
                    {isPassword && (
                        <button type="button" onClick={() => setShowpassword(!showpassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer">
                            {showpassword ? (
                                <FiEye className="w-5 h-5" />
                            ) : (
                                <FiEyeOff className="w-5 h-5" />
                            )}
                        </button>
                    )}
                </div>
                {error && <div className="flex mt-1 text-sm text-red-500 items-center gap-1.5"><FiAlertCircle /> <p>{error}</p></div>}
            </div>
        </>
    )
}

export default InputField