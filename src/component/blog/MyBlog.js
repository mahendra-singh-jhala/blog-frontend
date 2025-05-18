import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import UpdateBlog from './UpdateBlog';

const MyBlog = ({ auth }) => {
    const [blog, setBlog] = useState([])
    const [show, setShow] = useState(false);
    const token = auth

    // useEffect to fetch user blogs
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/blogs", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (res.status === 200) {
                    toast.success("fetching blog succsesfully")
                    setBlog(res.data.blogs)
                }
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message || "An error occurred")
                } else {
                    toast.error("Error fetching blogs, please try again")
                }
            }
        }

        fetchBlog()
    }, [token])


    // useEfect to delete user blogs
    const handledeleteBlog = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res.status === 200) {
                toast.success("Blog successfully deleted")
                setBlog(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "An error occurred")
            } else {
                toast.error("Error to deleting blog, please try again");
            }

        }
    }

    return (
        <div>
            <ul className="flex flex-wrap justify-evenly">
                {blog.length > 0 && blog.map((blog) => (
                    <li key={blog._id} className="flex items-center w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 mx-4 px-4 py-4 space-x-4">
                        <div>
                            <div className="w-80 h-40 overflow-hidden">
                                <img src={blog.blogImage} alt={blog.title} className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xl text-gray-800 font-bold">{blog.title} </p>
                            <div className="space-y-4">
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600 font-semibold">{blog.content} </p>
                                    <p className="text-sm text-gray-600 font-semibold"><strong>Category : </strong> {blog.category} </p>
                                    <p className="text-sm text-gray-600 font-semibold"><strong>Author : </strong> {blog.author} </p>
                                </div>
                                <div className="flex items-center justify-between text-xl">
                                    <p className="text-xs font-semibold"> {new Date(blog.createdAt).toLocaleDateString()}</p>
                                    <div className="flex text-xl space-x-3">
                                        <FaEdit onClick={() => setShow(true)} className="text-green-500" />
                                        <MdDelete onClick={() => handledeleteBlog(blog._id)} className="text-red-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {show && (
                            <UpdateBlog onClose={() => setShow(false)} id={blog._id} auth={auth} setBlog={setBlog} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MyBlog



// < div >
//     <ul className="flex flex-wrap justify-evenly">
//         {blog.length > 0 && blog.map((blog) => (
//             <Link>
//                 <li key={blog._id} className="max-w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 mx-4 px-4 py-4 transform transition duration-500 hover:scale-90">
//                     <div>
//                         <div className="w-full h-40 overflow-hidden">
//                             <img src={blog.blogImage} className="object-cover w-full h-full" />
//                         </div>
//                     </div>
//                     <h2 className="font-bold text-xl mt-2"></h2>
//                     <div className="mt-4 space-y-3">
//                         <p className="text-xl text-gray-800 font-bold">{blog.title} </p>
//                         <div className="text-md text-gray-400 space-y-1">
//                             <p className="text-gray-600"> {blog.author} </p>
//                             <p className="text-xs"> {new Date(blog.createdAt).toLocaleDateString()}</p>
//                         </div>
//                     </div>
//                 </li>
//             </Link>
//         ))}
//     </ul>
// </div >
