import { Link } from "react-router-dom"
import Loader from "../../Component/Loader"
import InputField from "../../Component/InputField"
import { useRegister } from "../../hooks/useRegister"

const Register = () => {
    const { loading, handleChange, handleSubmit, form, formErros } = useRegister()
    return (
        <>
            {loading && <Loader />}
            <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
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
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <InputField
                            label="Full Name"
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder="John week"
                            error={formErros.fullName}
                        />
                        <InputField
                            label="Email Address"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            error={formErros.email}
                        />
                        <InputField
                            label="Password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            error={formErros.password}

                        />
                        <InputField
                            label="Confirm Password"
                            type="password"
                            name="confirmpassword"
                            value={form.confirmpassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            error={formErros.password}
                        // Passes error message to show red border
                        />

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 cursor-pointer"
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