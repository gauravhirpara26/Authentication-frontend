import { HiOutlineMail, HiArrowLeft } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

const Verifyemail = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 px-4 py-8">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                    {/* Header */}
                    <div className="text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
                            <HiOutlineMail className="text-4xl text-indigo-600" />
                        </div>

                        <h1 className="mt-5 text-3xl font-bold text-gray-800">
                            Verify Your Email
                        </h1>

                        <p className="mt-3 text-gray-500">
                            We've sent a <span className="font-semibold text-indigo-600">6-digit OTP</span> to your email address.
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                            Enter the verification code below to activate your account.
                        </p>
                    </div>

                    {/* OTP Form */}
                    <form className="mt-8 space-y-6">

                        {/* OTP Inputs */}
                        <div className="flex justify-between gap-2">

                            <input
                                type="text"
                                maxLength={1}
                                className="h-14 w-12 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxLength={1}
                                className="h-14 w-12 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxLength={1}
                                className="h-14 w-12 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxLength={1}
                                className="h-14 w-12 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxLength={1}
                                className="h-14 w-12 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="text"
                                maxLength={1}
                                className="h-14 w-12 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                        </div>

                        {/* Verify Button */}
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
                        >
                            <MdVerified className="text-xl" />
                            Verify Email
                        </button>

                    </form>

                    {/* Resend OTP */}
                    <div className="mt-6 text-center">

                        <p className="text-sm text-gray-500">
                            Didn't receive the OTP?
                        </p>

                        <button
                            className="mt-2 font-semibold text-indigo-600 transition hover:text-indigo-800"
                        >
                            Resend OTP
                        </button>

                    </div>

                    {/* Back */}
                    <div className="mt-6 text-center">

                        <a
                            href="/register"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-indigo-600"
                        >
                            <HiArrowLeft />
                            Back to Register
                        </a>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Verifyemail