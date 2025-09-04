import GoogleIcon from '../assets/GoogleIcon';

interface ButtonProps {
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function GoogleSignIn(
    { className =
        "w-full flex flex-row gap-4 justify-center items-center \
        transition ease-in-out duration-200 \
        py-2.5 px-2 rounded-md \
        text-gray-900 hover:bg-gray-50 placeholder:text-gray-400 sm:text-sm leading-none \
        border-0 shadow-sm ring-1 ring-inset ring-gray-300 \
        focus:ring-2 focus:ring-inset focus:ring-indigo-600",
        onClick
    }: ButtonProps) {
    return (
        <button className={className} onClick={onClick}>
            <GoogleIcon />
            <p className='text-nowrap'>Sign in with Google</p>
        </button>
    )
}

export default GoogleSignIn;
