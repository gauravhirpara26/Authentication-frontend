import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 px-4">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                            🔐
                        </div>

                        <h1 className="text-3xl font-bold text-gray-800 mt-4">
                            Welcome Back
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Login to continue
                        </p>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Password
                            </label>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full border border-gray-300 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2 text-gray-600">
                                <input type="checkbox" />
                                Remember me
                            </label>

                            <Link
                                to="/forgot-password"
                                className="text-indigo-600 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t"></div>

                        <span className="px-4 text-gray-500 text-sm">
                            OR
                        </span>

                        <div className="flex-1 border-t"></div>
                    </div>

                    {/* Google OAuth */}
                    <button
                        // onClick={handleGoogleLogin}
                        className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <FcGoogle size={24} />

                        <span className="font-medium">
                            Continue with Google
                        </span>
                    </button>

                    {/* Register */}
                    <p className="text-center mt-8 text-gray-600">
                        Don't have an account?

                        <Link
                            to="/"
                            className="text-indigo-600 font-semibold ml-2 hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                </div>
            </div>
        </>
    )
}
export default Login