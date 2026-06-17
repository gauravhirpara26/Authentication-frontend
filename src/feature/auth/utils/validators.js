export const REGEX = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\d{10,15}$/
}

export const validateRegistrationForm = (formData) => {
    const errors = {}
    const { contact, password, month, day, year, fullname, username } = formData

    if (!contact && !REGEX.EMAIL.test(contact) && !REGEX.PHONE.test(contact)) {
        errors.contact = "Please enter a valid mobile number or email address."
    }
    if (!password || password.length < 6) {
        errors.password = "Enter a combination of at least six numbers, letters and punctuation marks (like ! and &)."
    }
    if (!month || !day || !year) {
        errors.birthday = "Select your birthday. You can change who can see this later."
    }

    if (!fullname.trim()) errors.fullname = "Full name is required"
    if (!username.trim()) errors.username = "Please select a username for your account."

    return { isValid: Object.keys(errors).length === 0, errors }
}