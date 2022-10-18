import React, { Fragment, useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import classes from "./AdminDashboard.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
const AdminDashboard = () => {
  const [quizs, setQuizs] = useState([]);
  useEffect(() => {
    axios.get("/api/quiz/getAllQuizs").then((res) => {
      setQuizs(res.data);
    });
  }, []);
  return (
    <Fragment>
      <Navigation />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <Link to="/makeQuiz">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Create Test
          </button>
        </Link>
      </div>
      <div>
        <div className="container mx-auto">
          <h1>All Quizs</h1>
          <hr></hr>
          {quizs.map((quiz, index) => (
            <div
              key={index}
              className="container flex gap-28 mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 "
            >
              <p className="text-lg">{quiz.subject}</p>
              <Link to={`test/${quiz._id}`}>
                <button className="ext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  {" "}
                  Start Test
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default AdminDashboard;
