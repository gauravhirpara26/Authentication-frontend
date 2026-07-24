
import { HiOutlineMail, HiArrowLeft } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { useVerifyEmail } from "../../hooks/useVerifyEmail";
import AuthLayout from "../../layouts/Authlayout";
import Loader from "../../Component/Loader";
import OtpInput from "../../Component/OtpInput";


const Verifyemail = () => {

    const { handleChange, handleVerify, handlePaste, error, isLoading, handleKeydown, otp } = useVerifyEmail()

    return (
        <>
            {isLoading && <Loader />}
            <AuthLayout>
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
                <form className="mt-8 space-y-6" onSubmit={handleVerify}>

                    {/* OTP Inputs */}
                    
                    <OtpInput/>

                    {error && <div className="flex mt-1 text-sm text-red-500 items-center gap-1.5"><FiAlertCircle /> <p>{error}</p></div>}

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

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-indigo-600"
                    >
                        <HiArrowLeft />
                        Back to Register
                    </Link>

                </div>
            </AuthLayout>
        </>
    )
}

export default Verifyemail