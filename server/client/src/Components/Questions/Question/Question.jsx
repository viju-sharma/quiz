import React, { Fragment, useState } from "react";
import classes from "./Question.module.css";

const Question = (props) => {
  const onChangeHandler = () => {};
  const question = props.question;
  const { questionText, type, point, options, minChar, maxChar, questionNum } =
    question;
  return (
    <div className="container mx-16 my-5 bg-gray-200 rounded-xl shadow border p-8 m-10 ">
      <div className="sm:grid grid-cols-6 items-center">
        <div className="flex my-2 items-center col-start-7">
          <span className="mb-2 text-sm font-medium text-gray-900 m-1 dark:text-gray-300">
            Points : {point}
          </span>
        </div>
      </div>
      <div>
        <p>
          <span>Ques {questionNum}: </span>
          {questionText}
        </p>
      </div>

      {type === "mcq" ? (
        <div className="">
          {options.map((option, optionIndex) => (
            <div
              key={optionIndex}
              className="flex my-1"
              style={{ margin: "1rem" }}
            >
              <input type="radio" className="m-1" />
              <span>{option}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex">
          <textarea
            // onChange={(e) => handleQuestionTextChange(e, index)}
            // value={question.questionText}
            id="message"
            name="questionText"
            rows="2"
            className="block m-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Question..."
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default Question;
