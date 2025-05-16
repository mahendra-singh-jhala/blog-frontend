import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./component/auth/Login";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";
import Register from "./component/auth/Register";
import CreateBlog from "./component/blog/CreateBlog";

function App() {
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateBlog />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

export default App;
