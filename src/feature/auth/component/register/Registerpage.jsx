import Footer from "../../../../common/component/Footer"
import useRegister from '../register/useRegister.js'
import { DATE_CONSTANTS } from "../../utils/constants.js"
import { MetaLogo, ErrorIcon, SelectChevron } from "../../../../common/component/Icon.jsx"
function Registerpage() {

    const { formData, errors, status, serverMessage, handleChange, usernameSuggestion, applySuggestion, submitRegistration } = useRegister()
    const isloading = status === 'loading'

    const getInputClass = (hasError) => hasError
        ? "w-full h-12 bg-transparent border border-[#ED4956] rounded-xl px-4 text-[#ED4956] placeholder-[#ED4956]/80 focus:outline-none text-[15px]"
        : "w-full h-12 bg-transparent border border-[#363636] rounded-xl px-4 text-[#F5F5F5] placeholder-[#A8A8A8] focus:border-gray-500 focus:outline-none transition-colors text-[15px]";

    const getSelectClass = (hasError) => hasError
        ? "w-full h-12 bg-transparent border border-[#ED4956] rounded-xl pl-4 pr-10 text-[#ED4956] text-[15px] appearance-none focus:outline-none cursor-pointer"
        : "w-full h-12 bg-transparent border border-[#363636] rounded-xl pl-4 pr-10 text-[#F5F5F5] text-[15px] appearance-none focus:border-gray-500 focus:outline-none transition-colors cursor-pointer px-2";

    return (
        <>
            <div className="min-h-screen bg-[#121212] text-[#F5F5F5] font-sans flex flex-col items-center pt-10 pb-6">
                <div className="w-full max-w-[500px] px-5 flex-grow">

                    {/* Header */}
                    <div className="flex items-center mb-6">
                        <button className="mr-4 text-[#F5F5F5] hover:opacity-70 transition-opacity">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <div className="flex items-center gap-1.5 font-semibold text-[15px]">
                            <MetaLogo />
                        </div>
                    </div>

                    {/* Titles */}
                    <h1 className="text-2xl font-semibold mb-2">Get started on Instagram</h1>
                    <p className="text-[14px] text-[#F5F5F5] mb-6">Sign up to see photos and videos from your friends.</p>

                    {serverMessage && (
                        <div className={`mb-6 p-3 rounded-lg text-sm text-center font-medium ${serverMessage.type === 'success' ? 'bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/30' : 'bg-[#ED4956]/10 text-[#ED4956] border border-[#ED4956]/30'}`}>
                            {serverMessage.text}
                        </div>
                    )}

                    <form className="flex flex-col" onSubmit={submitRegistration} noValidate>

                        {/* Mobile/Email Input (Error State) */}
                        <div className="mb-4">
                            <label className="block text-[15px] font-semibold mb-2">Mobile number or email</label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                placeholder="Mobile number or email"
                                className={getInputClass(!!errors.contact)}
                                onChange={handleChange} />
                            {errors.contact && (<div className="flex items-start gap-1.5 mt-2 text-[#ED4956] text-[13px] leading-snug">
                                <ErrorIcon /><span>{errors.contact}</span>
                            </div>)}
                        </div>

                        <p className="text-[13px] text-[#F5F5F5] mb-5 leading-relaxed">
                            You may receive notifications from us. <a href="#" className="text-[#0095F6] font-medium hover:underline">Learn why we ask for your contact information</a>
                        </p>

                        {/* Password Input (Error State) */}
                        <div className="mb-5">
                            <label className="block text-[15px] font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                placeholder="Password"
                                onChange={handleChange}
                                className={getInputClass(!!errors.password)}
                            />
                            {errors.password && (<div className="flex items-start gap-1.5 mt-2 text-[#ED4956] text-[13px] leading-snug">
                                <ErrorIcon />
                                <span>{errors.password}</span>
                            </div>)}
                        </div>

                        {/* Birthday Selects (Error State) */}
                        <div className="mb-6">
                            <label className="flex items-center gap-1.5 text-[15px] font-semibold mb-2">
                                Birthday
                                {/* <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full border-[1.5px] border-[#F5F5F5] text-[11px] font-bold cursor-pointer">?</span> */}
                            </label>

                            <div className="flex gap-3">
                                <div className="relative flex-1">
                                    <select className={getSelectClass(!!errors.birthday)} name="month" value={formData.month} onChange={handleChange}>
                                        <option value="" disabled className="bg-[#121212] text-[#F5F5F5]">Month</option>
                                        {DATE_CONSTANTS.MONTH.map(m => <option key={m} value={m} className="bg-[#121212] text-[#F5F5F5]">{m}</option>)}
                                    </select>
                                    <SelectChevron hasError={!!errors.birthday} />
                                </div>
                                <div className="relative flex-1">
                                    <select className={getSelectClass(!!errors.birthday)} name="day" value={formData.day} onChange={handleChange}>
                                        <option value="" disabled className="bg-[#121212] text-[#F5F5F5]">Day</option>
                                        {DATE_CONSTANTS.DAYS.map(d => <option key={d} value={d} className="bg-[#121212] text-[#F5F5F5]">{d}</option>)}
                                    </select>
                                    <SelectChevron hasError={!!errors.birthday} />
                                </div>
                                <div className="relative flex-1">
                                    <select className={getSelectClass(!!errors.birthday)} name="year" value={formData.year} onChange={handleChange}>
                                        <option value="" disabled className="bg-[#121212] text-[#F5F5F5]">Year</option>
                                        {DATE_CONSTANTS.YEARS.map(y => <option key={y} value={y} className="bg-[#121212] text-[#F5F5F5]">{y}</option>)}
                                    </select>
                                    <SelectChevron hasError={!!errors.birthday} />
                                </div>
                            </div>

                            {errors.birthday && (<div className="flex items-start gap-1.5 mt-2 text-[#ED4956] text-[13px] leading-snug">
                                <ErrorIcon />
                                <span>{errors.birthday}</span>
                            </div>)}
                        </div>

                        {/* Name Input (Normal State) */}
                        <div className="mb-4">
                            <label className="block text-[15px] font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Full name"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="w-full h-12 bg-transparent border border-[#363636] rounded-xl px-4 text-[#F5F5F5] placeholder-[#A8A8A8] focus:border-gray-500 focus:outline-none transition-colors text-[15px]"
                            />
                        </div>

                        {/* Username Input (Error State) */}
                        <div className="mb-6">
                            <label className="block text-[15px] font-semibold mb-2">Username</label>
                            <input
                                type="text"
                                placeholder="Username"
                                className={getInputClass(!!errors.username)}
                                name="username"
                                onChange={handleChange}
                                value={formData.username}
                            />
                            {errors.username && (
                                <div className="flex items-start gap-1.5 mt-2 text-[#ED4956] text-[13px] leading-snug">
                                    <ErrorIcon />
                                    <span>{errors.username}</span>
                                </div>
                            )}

                            {/* FIX 2: Fixed the React syntax errors so this actually renders! */}
                            {usernameSuggestion && usernameSuggestion.length > 0 && (
                                <div className="mt-3">
                                    <p className="text-[12px] text-[#A8A8A8] mb-2">Available suggestions:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {usernameSuggestion.map((suggestion) => (
                                            <button
                                                key={suggestion}
                                                type="button"
                                                onClick={() => applySuggestion(suggestion)}
                                                className="text-[12px] bg-[#262626] text-[#F5F5F5] px-3 py-1.5 rounded-full hover:bg-[#363636] transition-colors border border-[#363636] cursor-pointer"
                                            >
                                                {suggestion}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Legal Disclaimers (From the second screenshot) */}
                        <div className="text-[12px] text-[#F5F5F5] mb-6 space-y-4">
                            <p>
                                People who use our service may have uploaded your contact information to Instagram. <a href="#" className="text-[#0095F6] hover:underline">Learn more</a>.
                            </p>
                            <p>
                                By tapping Submit, you agree to create an account and to Instagram's <a href="#" className="text-[#0095F6] hover:underline">Terms</a>, <a href="#" className="text-[#0095F6] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#0095F6] hover:underline">Cookies Policy</a>.
                            </p>
                            <p>
                                The <a href="#" className="text-[#0095F6] hover:underline">Privacy Policy</a> describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalize and improve our products, including ads.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className={`w-full h-11 text-white font-semibold rounded-full transition-colors mb-3 flex items-center justify-center ${isloading ? 'bg-[#005C98] cursor-not-allowed opacity-70' : 'bg-[#0095F6] hover:bg-[#1877F2] cursor-pointer'}`} disabled={isloading}>
                            {isloading ? 'Loading...' : 'Submit'}
                        </button>

                        {/* Already have an account Button */}
                        <button type="button" className="w-full h-11 bg-transparent border border-[#363636] hover:bg-[#262626] text-[#F5F5F5] font-semibold rounded-full transition-colors">
                            I already have an account
                        </button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Registerpage