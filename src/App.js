import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./component/auth/Login";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";
import Register from "./component/auth/Register";
import CreateBlog from "./component/blog/CreateBlog";
import { Toaster } from "react-hot-toast";
import Header from "./component/navbar/Header";

function App() {
    return (
        <Router>
            <Toaster position="top-right" />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create" element={<CreateBlog />} />
            </Routes>
        </Router>
    );
}

export default App;
