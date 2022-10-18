import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navigation from "../Navigation/Navigation";
import axios from "axios";
import Question from "../Questions/Question/Question";

const Test = () => {
  const params = useParams();
  const id = params.id;
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(`/api/quiz/test/${id}`).then((res) => {
      setQuestions(res.data);
    });
  }, [id]);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div>
      <Navigation />
      <div>
        {questions.map((question) => (
          <Question key={question._id} question={question} />
        ))}
      </div>
      <div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              console.log("clicked");
              alert("Test Submitted");
              window.location.reload();
            }}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
