import { useMemo, useState } from "react"
import { authApi } from "@/feature/auth/api/authApi"

const useLogin = () => {
    const [formData, SetFormData] = useState({
        MUE: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        SetFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await authApi.login(formData)
            localStorage.setItem('accessToken', data.accessToken)
            console.log('login Successfully')
        } catch (err) {
            console.error('login Failed : ', err)
        }
    }

    const isLoginDisabled = useMemo(() => {
        return !formData.MUE.trim() || !formData.password.trim()
    }, [formData])

    return { handleChange, handleSubmit, isLoginDisabled, formData }
}

export default useLogin