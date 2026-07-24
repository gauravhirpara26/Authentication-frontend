import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Forgotpassword = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 px-4">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center">
                            <FaEnvelope className="text-4xl text-indigo-600" />
                        </div>

                        <h1 className="text-3xl font-bold text-gray-800 mt-5">
                            Forgot Password?
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Enter your registered email address and we'll send you a password reset link.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Email Address
                            </label>

                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        <button onClick={()=> navigate('/verify-otp')}
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 cursor-pointer"
                        >
                            Send Reset Link
                        </button>

                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">

                        <a
                            href="/login"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            ← Back to Login
                        </a>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Forgotpassword