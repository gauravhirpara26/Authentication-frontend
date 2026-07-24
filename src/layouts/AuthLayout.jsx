const AuthLayout = ({ children }) => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                    {children}
                </div>
            </div>
        </>
    )
}
export default AuthLayout