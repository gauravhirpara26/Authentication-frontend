import { Link } from "react-router-dom"
const Register = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="mx-auto w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                            🚀
                        </div>

                        <h1 className="text-3xl font-bold text-gray-800 mt-4">
                            Create Account
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Register to start your journey
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                name="fullName"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                name="email"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                name="password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                name="confirmpassword"
                            />
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-300"></div>

                        <span className="px-4 text-sm text-gray-500">
                            OR
                        </span>

                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Google OAuth */}
                    {/* <button
                        // onClick={handleGoogleSignup}
                        className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition duration-300 cursor-pointer"
                    >
                        <FcGoogle size={24} />

                        <span className="font-medium text-gray-700">
                            Continue with Google
                        </span>
                    </button> */}

                    {/* Login Link */}
                    <p className="text-center text-gray-500 mt-3">
                        Already have an account?

                        <Link
                            to="/login"
                            className="text-indigo-600 font-semibold ml-2 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>

                </div>
            </div>
        </>
    )
}
export default Register