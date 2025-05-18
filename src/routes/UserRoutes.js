
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Home from '../component/home/Home';
import Login from '../component/auth/Login';
import Register from '../component/auth/Register';
import Blog from '../component/blog/Blog';
import { useEffect, useState } from 'react';

const UserRoutes = () => {
    const [auth, setAuth] = useState("");

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem("auth") || "{}");
        setAuth(authData.token || "");
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setAuth(""); 
        window.location.href = "/";
    };

    return (
        <div>
            <header>
                <Navbar auth={auth} handleLogout={handleLogout} />
            </header>
            <main>
                <Routes>
                    {!auth ? (
                        <>
                            <Route path="/" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </>
                    ) : (
                        <>
                            <Route path="/home" element={<Home auth={auth} />} />
                            <Route path="/blog/*" element={<Blog auth={auth} />} />
                        </>
                    )}

                </Routes>
            </main>
        </div>
    );
}

export default UserRoutes
