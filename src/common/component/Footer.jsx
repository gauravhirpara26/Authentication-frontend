function Footer() {
    return (
        <>
            <footer className="w-full max-w-4xl mx-auto px-5 mt-16 flex flex-col items-center gap-4 text-[#A8A8A8] text-[12px]">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <a href="#" className="hover:underline">Meta</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Blog</a>
                    <a href="#" className="hover:underline">Jobs</a>
                    <a href="#" className="hover:underline">Help</a>
                    <a href="#" className="hover:underline">API</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Locations</a>
                    <a href="#" className="hover:underline">Instagram Lite</a>
                    <a href="#" className="hover:underline">Contact Uploading & Non-Users</a>
                    <a href="#" className="hover:underline">Meta Verified</a>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 hover:underline">
                        English
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <span>© 2026 Instagram from Meta</span>
                </div>
            </footer>
        </>
    )
}
export default Footer