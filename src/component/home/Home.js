import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFilter } from "react-icons/fa";
import Footer from '../footer/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';

const categories = ["Finance", "Food", "Travel", "Career"];

const Home = ({ auth }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();
    const token = auth
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category') || '';
    const author = searchParams.get('author') || '';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Fetch blogs on filter change
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/blogs/blog?category=${category}&author=${author}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (res.status === 200) {
                    toast.success("Fetching blogs successfully");
                    setBlogs(res.data.blog);
                }
            } catch (error) {
                toast.error(error?.response?.data?.message || "Error fetching blogs, please try again");
            }
        };

        fetchBlog();
    }, [category, author, token]);

    // Category filter change handler
    const handleCategoryChange = (value) => {
        const searchParams = new URLSearchParams(location.search);
        if (category === value) {
            searchParams.delete('category');
        } else {
            searchParams.set('category', value);
        }

        navigate({ search: `?${searchParams.toString()}` });
    };

    // Author input change handler
    const handleAuthorChange = (e) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('author', e.target.value);
        navigate({ search: `?${searchParams.toString()}` });
    };

    return (
        <div>
            <div className="min-h-screen max-w-screen mx-10 md:mx-20 pt-16">
                <div className="flex items-center justify-between border-b-2 my-4 p-2">
                    <h1 className='uppercase font-bold text-4xl'>Blogs</h1>
                    <button className="inline-flex items-center justify-center md:hidden" onClick={toggleMenu}>
                        <FaFilter />
                    </button>
                </div>
                <div className="grid grid-cols-12">
                    <div className={`col-span-3 border-r-4 space-y-2 pr-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <div className="mb-4">
                            <h2 className="text-md md:text-lg font-semibold mb-2">Filter by Category</h2>
                            {categories.map((cat) => (
                                <div key={cat} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        value={cat}
                                        checked={category === cat}
                                        onChange={() => handleCategoryChange(cat)}
                                        className="mr-2"
                                    />
                                    <label>{cat}</label>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <h2 className="text-md md:text-lg font-semibold mb-2">Search by Author</h2>
                            <input
                                type="text"
                                value={author}
                                onChange={handleAuthorChange}
                                placeholder="Type author name"
                                className="w-full border px-2 py-1 rounded"
                            />
                        </div>
                    </div>
                    <div className="col-span-9">
                        <ul className="flex flex-wrap justify-evenly">
                            {blogs.length > 0 ? (
                                blogs.map((blog) => (
                                    <li key={blog._id} className="flex items-center w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 mx-4 px-4 py-4 space-x-4">
                                        <div className="w-80 h-40 overflow-hidden">
                                            <img src={blog.blogImage} alt={blog.title} className="object-cover w-full h-full" />
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-xl text-gray-800 font-bold">{blog.title}</p>
                                            <div className="space-y-3">
                                                <p className="text-sm text-gray-600 font-semibold">{blog.content}</p>
                                                <p className="text-sm text-gray-600 font-semibold"><strong>Category:</strong> {blog.category}</p>
                                                <p className="text-sm text-gray-600 font-semibold"><strong>Author:</strong> {blog.author}</p>
                                                <p className="text-xs font-semibold">{new Date(blog.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">No blogs found for the selected filters.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
