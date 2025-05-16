import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./component/auth/Login";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";

function App() {
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>

                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

export default App;
