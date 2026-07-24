
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmail } from "../Api/AuthApi";

export const useVerifyEmail = () => {
   
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const email = location.state?.email


    useEffect(() => {
        if (!email) {
            navigate('/')
        }
    }, [email, navigate])



    const handleVerify = async (e) => {
        e.preventDefault()
        setError('')

        const otpString = otp.join("")
        if (otpString.length !== 6) {
            setError('Please enter all 6 digits')
            return
        }
        setIsLoading(true)

        try {
            const responseData = await verifyEmail({ email, otpString })
            toast.success(responseData.message)
            navigate('/login')
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Verification Failed. Try again'
            toast.error(errorMsg)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { handleChange, handleVerify, handlePaste, error, isLoading,handleKeydown ,otp}
}