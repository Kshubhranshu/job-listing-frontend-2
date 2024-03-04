import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/job-details/:id" element={<JobDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
