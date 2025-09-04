import { useState } from 'react'

import AppleSignIn from '../components/AppleSignIn'
import GoogleSignIn from '../components/GoogleSignIn'

import EnvelopeIcon from '../assets/EnvelopeIcon'
import EyeClosedIcon from '../assets/EyeClosedIcon'
import EyeOpenIcon from '../assets/EyeOpenIcon'
import CheckedIcon from '../assets/CheckedIcon'

function SignInSection() {
    const [type, setType] = useState('password');

    return (
        <div className="md:m-4 md:ml-2 h-auto w-full md:w-3/5 p-4 rounded-xl flex flex-col-reverse md:flex-col">
            {/* Don't have an account */}
            <div className="flex flex-row justify-center md:justify-end md:mt-0 mt-4">
                <p className="text-sm">Don't have an account? <a href='#' title="Sign up" className="font-bold">Sign up</a></p>
            </div>

            {/* Sign in section */}
            <div className="flex flex-row justify-center w-full h-full -mt-2">
                <div className="flex flex-col justify-center xl:w-11/20 md:w-7/10 w-4/5 gap-6">
                    {/* with SSO */}
                    <div className="flex flex-row justify-center md:justify-start">
                        <h1 className="font-semibold text-4xl md:text-5xl">Sign in</h1>
                    </div>
                    <div className="flex flex-row justify-start">
                        <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-col lg:flex-row justify-center mt-2 gap-2">
                                <GoogleSignIn />
                                <AppleSignIn />
                            </div>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col w-full justify-center'>
                            <div className='border-0.5 rounded-xl border-gray-300 w-full'></div>
                        </div>
                        <p className="text-sm text-nowrap">Or with Email</p>
                        <div className='flex flex-col w-full justify-center'>
                            <div className='border-0.5 rounded-xl border-gray-300 w-full'></div>
                        </div>
                    </div>

                    {/* with Email */}
                    <div className="flex flex-row justify-start">
                        <form className="flex flex-col justify-start w-full gap-2">
                            {/* Mail input with leading icon */}
                            <div className="relative rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <EnvelopeIcon />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="
                                        block w-full py-2.5 pl-10
                                        text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6
                                        rounded-md border-0 ring-1 ring-inset ring-gray-300
                                        focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    placeholder="Email address"
                                    autoComplete='email'
                                />
                            </div>
                            {/* Password input with toggleable leading icon */}
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <button
                                    className="absolute inset-y-0 left-0 flex items-center pl-3"
                                    type="button"
                                    onClick={() => setType(old => old === "password" ? "text" : "password")}
                                    tabIndex={-1}
                                >
                                    {type === 'password' ?
                                        <EyeClosedIcon />
                                        :
                                        <EyeOpenIcon />
                                    }
                                </button>
                                <input
                                    type={type}
                                    name="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    className="
                                        block w-full py-2.5 pl-10
                                        text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6
                                        rounded-md border-0 ring-1 ring-inset ring-gray-300
                                        focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                />
                            </div>
                            {/* Remember me & forgot password */}
                            <div className='flex flex-col md:flex-row justify-between gap-2 mt-2'>
                                <div className='flex flex-row items-center gap-2'>
                                    <div className='flex gap-2 items-center'>
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            className="
                                                relative peer h-4 w-4
                                                appearance-none shadow-sm rounded border-1 border-gray-300
                                                cursor-pointer checked:bg-blue-500 checked:border-0
                                                focus:ring-1 focus:ring-inset focus:ring-indigo-600 shrink-0"
                                        />
                                        <CheckedIcon />
                                        <label className='text-sm text-gray-600 leading-none' htmlFor="remember">Remember me on this device</label>
                                    </div>
                                </div>
                                <a href='#' title="forgot password?" className='underline text-sm mt-2 md:mt-0 leading-none'>Forgot password?</a>
                            </div>
                            {/* Submitting form */}
                            <button
                                type="submit"
                                className="
                                    bg-shrek hover:bg-shrok mt-2
                                    transition ease-in-out duration-200
                                    rounded-full py-2.5 text-sm text-white">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SignInSection;
