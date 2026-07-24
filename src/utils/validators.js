export const validateRegisterForm = (form) => {
    const errors = {}

    if (form.password !== form.confirmpassword) errors.confirmpassword = 'Password do not Match'
    if (!form.fullName.trim()) errors.fullName = 'FullName is required'
    if (!form.email.trim()) errors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter Valid Email Format'
    if (!form.password) errors.password = 'Password is required'
    else if (form.password.length < 6) errors.password = 'Password must be at least 6 characters'
    if (!form.confirmpassword.trim()) errors.confirmpassword = 'Confirm password is required'

    return errors
}