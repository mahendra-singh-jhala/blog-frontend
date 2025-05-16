import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="h-screen max-w-96 flex flex-col items-center justify-center mx-auto">
            <div className="w-full p-6 rounded-lg shadow-lg bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
                <h1 className="text-2xl font-semibold text-center mb-8">Register</h1>
                <form>
                    <div className="mt-4">
                        <label className="block mb-1 text-md text-slate-800 font-medium ">Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full bg-gray-400 h-10 p-2 outline-none rounded-md placeholder:text-white"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <div className="block mb-1 text-md text-slate-800 font-medium"> Email </div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full bg-gray-400 h-10 p-2 outline-none rounded-md placeholder:text-white"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-1 text-md text-slate-800 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full bg-gray-400 h-10 p-2 outline-none rounded-md placeholder:text-white"
                            required
                        />
                    </div>

                    <Link to='/login' className="text-sm hover:underline hover:text-blue-600 mt-6 inline-block cursor-pointer">
                        Already have an account?
                    </Link>
                    <button type="submit" className="w-full flex items-center justify-center px-5 py-2 text-md font-medium text-center bg-gray-400 bg-opacity-50 rounded cursor-pointer hover:text-slate-900 mt-1">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
