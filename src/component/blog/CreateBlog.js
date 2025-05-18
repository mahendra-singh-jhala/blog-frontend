import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const CreateBlog = ({auth}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const token = auth
    const navigate = useNavigate()

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { title, content, category, image }
        try {
            const res = await axios.post("https://blog-backend-2uco.onrender.com/api/blogs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.status === 200) {
                toast.success("Created blog successfully");
                setTitle("")
                setContent("")
                setCategory("")
                setImage("")
                navigate("/blog")
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "An error occurred")
            } else {
                toast.error("Failed to create blog, please try again");
            }
        }
    };

    return (
        <div className="min-h-screen bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Create Blog</h1>
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
                    Create Blog
                </button>
            </form>
        </div>
    )
}

export default CreateBlog
