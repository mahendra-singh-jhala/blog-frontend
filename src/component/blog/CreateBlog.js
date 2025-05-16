import React from 'react'

const CreateBlog = () => {
    return (
        <div className="min-h-screen bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-20">
            <h1 className="text-4xl font-bold text-center mb-6">Create Blog</h1>
            <form className="space-y-6">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Blog Title"
                        className="bg-gray-50 border border-gray-300 rounded-lg p-2 w-full outline-none"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Content</label>
                    <textarea
                        name="content"
                        placeholder="Blog Content..."
                        rows="4"
                        className="bg-gray-50 border border-gray-300 rounded-lg p-2 w-full outline-none"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                    <select
                            id="category"
                            name="category"
                            className="rounded w-full py-2 px-3 bg-gray-200 text-gray-800 leading-tight focus:outline-none"
                        >
                            <option value="career">Career</option>
                            <option value="finance">Finance</option>
                            <option value="travel">Travel</option>
                        </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Image URL</label>
                    <input
                        type="text"
                        name="image"
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
