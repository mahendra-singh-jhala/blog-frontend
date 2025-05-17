import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CreateBlog from './CreateBlog'
import MyBlog from './MyBlog'

const Blog = ({ auth }) => {
    return (
        <div className="min-h-screen max-w-screen mx-10 md:mx-20 pt-16">
            <div className="flex items-center border-b-2 my-4 p-2">
                <Link to="/blog">
                    <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-3xl text-sm px-5 py-2 text-center outline-none me-4">
                        My Blog
                    </button>
                </Link>
                <Link to="/blog/create">
                    <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-3xl text-sm px-5 py-2 text-center outline-none">
                        Create Blog
                    </button>
                </Link>
            </div>
            <div className="my-4">
                <Routes>
                    <Route path='/' element={<MyBlog auth={auth} />}/>
                    <Route path='create' element={<CreateBlog auth={auth} />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Blog
