import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='min-h-screen max-w-screen mx-10 md:mx-20 pt-16'>
            <div className='flex items-center justify-between border-b-2 my-4 p-2'>
                <h1 className='uppercase font-bold text-4xl'>
                    Blogs
                </h1>
                <button className='inline-flex items-center justify-center md:hidden'>
                    <FaFilter />
                </button>
            </div>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 border-r-2'>
                    black
                </div>
                <div className='col-span-10'>
                    <ul className="flex flex-wrap justify-evenly">
                        {[1, 2, 3, 4, 5,6,7,8].map(() => (
                            <Link>
                                <li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 mx-4 px-4 py-4 transform transition duration-500 hover:scale-90">
                                    <div>
                                        <div className="w-full h-40 overflow-hidden">
                                            <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/66610504/2636936256.jpg" className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                    <h2 className="font-bold text-xl mt-2"></h2>
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-800 font-semibold"><strong className="text-md">for websit building </strong> </p>
                                        <p className="text-sm text-gray-800 font-semibold"> hash sing </p>
                                        <p className="text-sm text-gray-800 font-semibold">12 dec 2025 </p>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
