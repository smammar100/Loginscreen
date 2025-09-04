interface CheckedIconProps {
    className?: string;
}

function CheckedIcon({ className = "absolute h3 aspect-square ml-0.5 hidden peer-checked:block text-white pointer-events-none" }: CheckedIconProps) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    )
}

export default CheckedIcon;
