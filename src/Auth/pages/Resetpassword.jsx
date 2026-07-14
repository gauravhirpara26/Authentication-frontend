const Resetpassword = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 px-4 py-10">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                    {/* <!-- Header --> */}
                    <div className="text-center">
                        <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 15v2m-6-6V9a6 6 0 1112 0v2m-9 0h6a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5a2 2 0 012-2z" />
                            </svg>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mt-5">
                            Reset Password
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Create a new password for your account.
                        </p>
                    </div>

                    {/* <!-- Form --> */}
                    <form className="mt-8 space-y-5">

                        {/* <!-- New Password --> */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                New Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter new password"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* <!-- Confirm Password --> */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm new password"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                           />
                        </div>

                        {/* <!-- Reset Button --> */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
                        >
                            Reset Password
                        </button>

                    </form>

                    {/* <!-- Back to Login --> */}
                    <div className="text-center mt-6">
                        <a
                            href="/login"
                            className="text-indigo-600 hover:underline font-medium"
                        >
                            ← Back to Login
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Resetpassword