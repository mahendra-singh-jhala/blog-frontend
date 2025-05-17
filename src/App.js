import { BrowserRouter as Router } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import UserRoutes from "./routes/UserRoutes";

function App() {
    return (
        <Router>
            <Toaster position="top-right" />
            <UserRoutes />
        </Router>

    )
}

export default App;
