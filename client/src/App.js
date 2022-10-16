import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import CreateTest from "./Components/Admin/CreateTest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/makeQuiz" element={<CreateTest />} />
      </Routes>
    </div>
  );
}

export default App;
