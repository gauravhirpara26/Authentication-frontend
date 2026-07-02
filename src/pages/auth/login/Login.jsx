import { MetaLogo } from "@/common/component/Icon"
import './login.css'
import loginbanner from "@/assets/loginbanner.webp"
import instagram_logo from "@/assets/instagram_logo.jpg"
import Footer from "@/common/component/Footer"
import { useNavigate } from 'react-router-dom'
import useLogin from "./uselLogin"
const Login = () => {
    const navigate = useNavigate()
    const goToRegister = () => {
        navigate('/register')
    }

    const { formData, handleChange, handleSubmit, isLoginDisabled } = useLogin()
    return (
        <>
            <div className="bg-[#000000] text-[#F5F5F5] font-sans antialiased min-h-screen flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center p-8 bg-[#000000]">
                    <div className="absolute top-8 left-8 md:top-10 md:left-10">
                        <img src={instagram_logo} alt="" />
                    </div>

                    <h1 className="text-3xl md:text-[40px] font-medium text-center leading-tight mt-12 md:mt-0 max-w-md">
                        See everyday moments from your
                        <span className="ig-text-gradient block mt-1">close friends.</span>
                    </h1>
                    <div className="mt-12 w-full max-w-[350px] aspect-square relative">
                        <img src={loginbanner} alt="" />
                    </div>

                </div>

                <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center p-8 bg-[#121212] border-t md:border-t-0 md:border-l border-[#262626] relative">

                    <div className="w-full max-w-[380px] flex flex-col pt-8">
                        <h2 className="text-[22px] font-semibold mb-6">Log into Instagram</h2>
                        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Mobile number, username or email"
                                className="w-full bg-[#1E1E1E] border border-[#363636] rounded-[8px] px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-500 placeholder-[#A8A8A8] transition-colors" name="MUE"
                                onChange={handleChange} value={formData.MUE}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-[#1E1E1E] border border-[#363636] rounded-[8px] px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-500 placeholder-[#A8A8A8] transition-colors"
                                name="password" onChange={handleChange} value={formData.password}
                            />

                            <button type="submit" className={`w-full font-semibold rounded-full py-3.5 mt-2 transition-colors duration-200  ${isLoginDisabled
                                ? "bg-[#1c4b82]/50 text-[#86a8d4]/50 cursor-not-allowed border-none"
                                : "bg-[#1c4b82] hover:bg-[#1877F2] text-[#86a8d4] hover:text-white cursor-pointer"
                                }`}>
                                Log in
                            </button>
                        </form>
                        <a href="#" className="text-[15px] font-semibold text-center mt-5 mb-8 hover:text-gray-300 transition-colors">
                            Forgot password?
                        </a>

                        <div className="flex flex-col gap-3">
                            <button type="button" className="w-full flex items-center justify-center gap-2 border border-[#363636] hover:bg-[#262626] text-[#F5F5F5] font-semibold rounded-full py-3.5 transition-colors text-[15px]">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#1877F2]">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Log in with Facebook
                            </button>

                            <button type="button" className="w-full border border-[#0064e0] hover:bg-[#001c38] text-[#0095f6] font-semibold rounded-full py-3.5 transition-colors text-[15px] cursor-pointer" onClick={goToRegister}>
                                Create new account
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-8 flex justify-center w-full md:w-auto">
                        <MetaLogo />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login