import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const UpdateBlog = ({ onClose, id, auth, setBlog }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const token = auth

    // Function to handle update blog
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { title, content, category, image }
        try {
            const res = await axios.put(`https://blog-backend-2uco.onrender.com/api/blogs/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.status === 200) {
                toast.success("Update successful");
                setBlog(prev =>
                    prev.map(b => b._id === res._id ? res.data : b)
                );
                onClose();
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "An error occurred")
            } else {
                toast.error("Error to update blog, please try again");
            }
        }
    };


    return (
        <div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-20 h-screen z-50">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-96 relative" >
                <div className="flex justify-center mb-4 relative">
                    <h1 className="text-xl font-bold mr-4 text-white mb-4"> Update Task </h1>
                    <button onClick={onClose} className="text-xl font-bold mr-4 absolute -top-4 -right-10 bg-gray-300 text-red-600 rounded-full p-1 px-3"> X </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Blog Title"
                            className="bg-gray-50 border border-gray-300 rounded-lg p-2 w-full outline-none"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Content</label>
                        <textarea
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Blog Content..."
                            rows="4"
                            className="bg-gray-50 border border-gray-300 rounded-lg p-2 w-full outline-none"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="rounded w-full py-2 px-3 bg-gray-200 text-gray-800 leading-tight focus:outline-none"
                        >
                            <option>Select-category</option>
                            <option value="Career">Career</option>
                            <option value="Finance">Finance</option>
                            <option value="Travel">Travel</option>
                            <option value="Food">Food</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Image URL</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Image URL"
                            className="bg-gray-50 border border-gray-300 rounded-lg p-2 w-full outline-none"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                        Update Blog
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateBlog
