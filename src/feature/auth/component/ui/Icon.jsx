export const ErrorIcon = () => (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
);

export const SelectChevron = ({ hasError }) => (
    <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={hasError ? "#ED4956" : "#A8A8A8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

export const MetaLogo = () => (
    <svg width="20" height="20" viewBox="0 0 64 64" fill="currentColor">
        <path d="M48.1,23.3C44.9,23.3,42,25,40.4,27.7c-2.1-5-6-10.7-12.8-13.7c-4.4-1.9-9.5-1.5-13.6,1.2 c-5.6,3.6-8.2,10.6-6,16.8c1.6,4.6,5.8,8,10.6,8.7c3.1,0.4,6.3-0.3,8.8-2c2.1,5,6,10.7,12.8,13.7c4.4,1.9,9.5,1.5,13.6-1.2 c5.6-3.6,8.2-10.6,6-16.8C58.1,29.9,53.8,26.4,48.1,23.3z M22.7,35.4c-3.1-0.4-5.6-2.5-6.6-5.4c-1.3-4,0.3-8.4,3.8-10.7 c2.6-1.7,5.8-1.9,8.6-0.7c4.6,2,7.3,6.2,8.9,10c-3.7,3.5-9,6.2-14.7,6.8H22.7z M48.1,48.2c-2.6,1.7-5.8,1.9-8.6,0.7 c-4.6-2-7.3-6.2-8.9-10c3.7-3.5,9-6.2,14.7-6.8c3.1,0.4,5.6,2.5,6.6,5.4C53.2,41.4,51.6,45.8,48.1,48.2z" />
    </svg>
);

