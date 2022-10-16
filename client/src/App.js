import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import CreateTest from "./Components/Admin/CreateTest";
import LoginPage from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/makeQuiz" element={<CreateTest />} />
      </Routes>
    </div>
  );
}

export default App;
