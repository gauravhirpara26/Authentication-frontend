import { useNavigate } from "react-router-dom"
const Verifyotp = () => {
    const navigate = useNavigate()
    return (
        <>
            <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 px-4">
                <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                    {/* <!-- Icon --> */}
                    <div class="flex justify-center">
                        <div class="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* <!-- Heading --> */}
                    <div class="text-center mt-6">
                        <h2 class="text-3xl font-bold text-gray-800">
                            Verify OTP
                        </h2>

                        <p class="text-gray-500 mt-2">
                            Enter the 6-digit verification code sent to your email.
                        </p>
                    </div>

                    {/* <!-- OTP Form --> */}
                    <form class="mt-8 space-y-6">

                        {/* <!-- OTP Inputs --> */}
                        <div class="flex justify-between gap-3">
                            <input
                                type="text"
                                maxlength="1"
                                class="w-12 h-14 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxlength="1"
                                class="w-12 h-14 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxlength="1"
                                class="w-12 h-14 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxlength="1"
                                class="w-12 h-14 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxlength="1"
                                class="w-12 h-14 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxlength="1"
                                class="w-12 h-14 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* <!-- Verify Button --> */}
                        <button
                            type="submit" onClick={() => navigate('/reset-password')}
                            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 cursor-pointer"
                        >
                            Verify OTP
                        </button>

                    </form>

                    {/* <!-- Resend --> */}
                    <div class="text-center mt-6">
                        <p class="text-gray-500 text-sm">
                            Didn't receive the code?
                        </p>

                        <button
                            class="mt-2 text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                        >
                            Resend OTP
                        </button>
                    </div>

                    {/* <!-- Back --> */}
                    <div class="text-center mt-6">
                        <a
                            href="/login"
                            class="text-gray-600 hover:text-indigo-600 font-medium"
                        >
                            ← Back to Login
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Verifyotp