import { useCallback, useState } from "react"
import { REGEX, validateRegistrationForm } from "../../utils/validators"
import { DATE_CONSTANTS } from "../../utils/constants"
import { authApi } from "../../api/authApi"
import { useEffect } from "react"

const useRegister = () => {
    const [formData, setFormData] = useState({
        contact: '', password: '', month: '', day: '', year: '', fullname: '', username: ''
    })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle')
    const [serverMessage, setServerMessage] = useState(null)
    const [usernameSuggestion, setUsernameSuggestion] = useState([])

    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))

        if ((name == 'month' || name === 'day' || name === 'year')) {
            setErrors(prev => ({ ...prev, birthday: null }))
        }
    }, [errors])

    useEffect(() => {
        const checkUser = async () => {
            if (!formData.username || formData.username.trim().length < 3) {
                setUsernameSuggestion([])
                return
            }

            try {
                const response = await authApi.checkUserName(formData.username)
                if (response.exists) {
                    setErrors(prev => ({ ...prev, username: 'This username is already taken' }))
                    setUsernameSuggestion(response.suggestion)
                }
                else {
                    setUsernameSuggestion([])
                    setErrors(prev => prev.username === 'This username is already taken.' ? { ...prev, username: null } : prev)
                }
            } catch (error) {
                console.error('Failed to check username', error)
            }
        }

        const timeOutId = setTimeout(checkUser, 500);
        return () => clearTimeout(timeOutId)
    }, [formData.username])

    const applySuggestion = (suggestion) => {
        setFormData(prev => ({ ...prev, username: suggestion }))
        setUsernameSuggestion([])
        setErrors(prev => ({ ...prev, username: null }))
    }
    const submitRegistration = async (e) => {
        e.preventDefault()
        setServerMessage(null)

        const { isValid, errors: validationErrors } = validateRegistrationForm(formData)

        if (!isValid) {
            setErrors(validationErrors)
            return
        }

        setStatus('loading')

        try {
            const monthIndex = String(DATE_CONSTANTS.MONTH.indexOf(formData.month) + 1).padStart(2, '0')
            const formmatedDate = `${formData.year}-${monthIndex}-${String(formData.day).padStart(2, '0')}`
            const isEmail = REGEX.EMAIL.test(formData.contact)

            const payload = {
                email: isEmail ? formData.contact : null,
                phone: !isEmail ? formData.contact : null,
                password: formData.password,
                DOB: formmatedDate,
                fullname: formData.fullname,
                username: formData.username
            }

            await authApi.register(payload)
            setFormData({ contact: '', password: '', month: '', day: '', year: '', fullname: '', username: '' })
            setStatus('success')
            setErrors({})
            setServerMessage({ type: 'success', text: 'Registration successful' })
        } catch (error) {
            setStatus('error')
            let errorMsg = 'Something went wrong. Please try again.'
            if (error.response) {
                try {
                    const errorData = await error.response.clone().json()

                    if (error.response.status === 409 && errorData.field) {
                        setErrors(prev => ({ ...prev, [errorData.field]: errorData.message }))
                        setStatus('idel')
                        return
                    }
                    errorMsg = errorData.message || errorData.error || errorMsg
                } catch (error) {
                    console.warn('Backend error stream could not be read.')
                }

            }
            else if (error.message === 'Failed to fetch') {
                errorMsg = 'Network Error: Make sure your Express backend is running.';
            } else {
                errorMsg = error.message;
            }
            setServerMessage({ type: 'error', text: errorMsg });
        } finally {
            setStatus('idle');
        }
    }

    return { formData, errors, status, serverMessage, handleChange, usernameSuggestion, applySuggestion, submitRegistration };

}

export default useRegister