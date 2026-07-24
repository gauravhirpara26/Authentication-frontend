export default OtpInput = ({onComplete}) => {
    const [otp, Setotp] = useState(new Array(6).fill())
    const inputRef = useRef([])

    const triggerChange=(newOtpArray)=>{
        Setotp(newOtpArray)
        onComplete(newOtpArray.join(''))
    }

    const handleChange = (element, index) => {
        const value = element.value
        if (isNaN(value)) return

        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1)
        Setotp(newOtp)

        if (value && index < 5) {
            inputRef.current[index + 1].focus()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text').slice(0, 6).split("")
        if (pastedData.some(char => isNaN(char))) return

        const newOtp = [...otp]
        pastedData.forEach((char, index) => {
            newOtp[index] = char
            if (inputRef.current[index]) {
                inputRef.current[index].value = char
            }
        });
        Setotp(newOtp)

        const focusIndex = pastedData.length < 6 ? pastedData.length : 5
        inputRef.current[focusIndex].focus()
    }

    const handleKeydown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRef.current[index - 1].focus()
        }
    }

    return (
        <>
            <div className="flex justify-between gap-2">

                {otp.map((digit, index) => (
                    <input
                        type="text"
                        key={index}
                        value={digit}
                        ref={(ref) => (inputRef.current[index] = ref)}
                        maxLength={1}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeydown(e.target, index)}
                        className="h-14 w-12 rounded-xl border border-gray-300 text-center text-2xl font-bold focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onPaste={handlePaste}
                    />
                ))}
            </div>
        </>
    )
}