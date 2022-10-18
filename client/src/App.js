import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import CreateTest from "./Components/Admin/CreateTest";
import LoginPage from "./Components/Login/Login";
import { useEffect } from "react";
import axios from "axios";
import { login } from "./features/auth-slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .post("/api/auth/check")
      .then((result) => {
        const user = result.data[0];
        dispatch(login(user));
      })
      .catch((err) => console.log("not workinbg"));
  }, []);

  const user = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={!user.id ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={user.id ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/makeQuiz"
          element={user.id ? <CreateTest /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
