import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ auth, handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="w-full fixed top-0 z-50 bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 border-b-2">
                <Link to={auth ? "/home" : "/" } className="flex items-center space-x-3">
                    <h1 className="text-4xl font-exile bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br text-transparent bg-clip-text">
                        BLOG
                    </h1>
                </Link>
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center w-8 h-8 text-purple-500 rounded-md md:hidden hover:bg-purple-600 hover:text-white border border-purple-600"
                >
                    <FaBars className='w-5 h-5' />
                </button>

                {auth ? (
                    <div
                        className={`w-full md:flex md:w-auto transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
                        id="navbar"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link to="/home"
                                    className="text-md transition-all duration-300 md:p-0 block py-2 px-3 md:py-0 md:px-0 hover:text-orange-300 hover:border-b-2 hover:border-orange-500"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog"
                                    className="text-md transition-all duration-300 md:p-0 block py-2 px-3 md:py-0 md:px-0 hover:text-orange-300 hover:border-b-2 hover:border-orange-500"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link onClick={handleLogout}
                                    className="text-md transition-all duration-300 md:p-0 block py-2 px-3 md:py-0 md:px-0 hover:text-orange-300 hover:border-b-2 hover:border-orange-500"
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/">
                        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-3xl text-sm px-5 py-2 text-center outline-none">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </nav>

    )
}

export default Navbar
