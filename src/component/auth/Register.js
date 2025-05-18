import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import axios  from "axios"

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    // function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = { name, email, password };
        try {
            const res = await axios.post("https://blog-backend-2uco.onrender.com/api/auth/signup", user, {
                headers: {
                    "Content-type": "application/json",
                }
            });
            const data = res.data;
            if (res.status === 200) {
                toast.success(data.message || "Registration successful");
                setName("");
                setEmail("");
                setPassword("");
                navigate("/login")
            }

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "An error occurred")
            } else {
                toast.error("Registration failed due to a network error");
            }
        }
    }

    return (
        <div className="h-screen max-w-96 flex flex-col items-center justify-center mx-auto text-white">
            <div className="w-full p-6 rounded-lg shadow-lg bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
                <h1 className="text-2xl font-semibold text-center mb-8">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="block mb-1 text-md text-slate-800 font-medium ">Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-gray-400 h-10 p-2 outline-none rounded-md placeholder:text-white"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <div className="block mb-1 text-md text-slate-800 font-medium"> Email </div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-400 h-10 p-2 outline-none rounded-md placeholder:text-white"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-1 text-md text-slate-800 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-400 h-10 p-2 outline-none rounded-md placeholder:text-white"
                            required
                        />
                    </div>

                    <Link to='/' className="text-sm text-gray-600 hover:underline hover:text-blue-600 mt-6 inline-block cursor-pointer">
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
