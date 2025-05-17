import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="w-full fixed top-0 z-50 bg-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 border-b-2">
                    <Link to="/" className="flex items-center space-x-3">
                        <h1 className="text-4xl font-exile bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br text-transparent bg-clip-text">
                            BLOG
                        </h1>
                    </Link>

                    <Link to="/login">
                        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-3xl text-sm px-5 py-2 text-center outline-none">
                            Login
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
