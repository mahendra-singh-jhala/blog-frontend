import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Home from '../component/home/Home';
import Login from '../component/auth/Login';
import Register from '../component/auth/Register';
import Blog from '../component/blog/Blog';

const UserRoutes = () => {
    const navigate = useNavigate();
    // get auth token from localStorage
    const authData = JSON.parse(localStorage.getItem("auth") || "{}");
    const auth = authData.token || "";

    // redirect login page if not authenticate
    useEffect(() => {
        if (!auth) {
            navigate("/login");
        }
    }, [auth, navigate]);

    return (
        <div>
            <header>
                <Navbar auth={auth} />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home auth={auth} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/blog/*" element={<Blog auth={auth} />} />
                </Routes>
            </main>
        </div>
    );
}

export default UserRoutes
