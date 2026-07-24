import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { registerUser } from "../Api/AuthApi"
import { validateRegisterForm } from "../utils/validators"

export const useRegister = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmpassword: '' })
    const [loading, setLoading] = useState(false)
    const [formErros, setFormErrors] = useState({})

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setFormErrors({ ...formErros, [e.target.name]: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Add validations
        const errors = validateRegisterForm(form)

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            return
        }

        setLoading(true)

        try {
            const responseData = await registerUser({
                fullName: form.fullName,
                email: form.email,
                password: form.password
            })

            toast.success(responseData.message)
            navigate('/verify-email')
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Registeration Failed. Try again'
            toast.error(errorMsg)
        }
        finally {
            setLoading(false)
        }
    }

    return { loading, handleChange, handleSubmit, form, formErros }
}