import React, { Fragment, useState, useEffect } from "react";
import classes from "./AddQuestion.module.css";
import Question from "../Question/Question";

const AddQuestion = () => {
  const [questionType, setQuestionType] = useState("mcq");
  const [questionText, setQuestionText] = useState("");
  const [points, setPoints] = useState([]);
  const [minChars, setMinChars] = useState([]);
  const [maxChars, setMaxChars] = useState([]);
  const [options, setOptions] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({ type: "mcq", questionText: "" });

  const [mcq, setMcq] = useState(true);
  const [shortText, setShortText] = useState(false);

  const addQuestionClasses = [
    classes.addQuestion,
    "rounded-xl shadow border p-8 m-10",
  ];

  useEffect(() => {
    let updatedQuestion = { ...question };
    updatedQuestion.type = questionType;
    setQuestion(updatedQuestion);
  }, [questionType]);

  const typeSelectionHandler = (event) => {
    if (event.target.value === "mcq") {
      setMcq(true);
      setShortText(false);
    } else {
      setMcq(false);
      setShortText(true);
    }
    setQuestionType(event.target.value);
    setQuestion({ type: questionType, questionText: "" });
  };

  const onChangeHandler = (event) => {
    if (event.target.name === "questionText") {
      setQuestionText(event.target.value);
    } else if (event.target.name === "points") {
      setPoints(event.target.value);
    }
  };

  const addOptionHandler = (event) => {
    let updatedOptions = { ...options };
    const name = event.target.name;
    updatedOptions = { ...updatedOptions, [name]: event.target.value };
    setOptions(updatedOptions);
  };

  const addTextLimit = (event) => {
    if (event.target.name === "minChars") {
      setMinChars(event.target.value);
    } else {
      setMaxChars(event.target.value);
    }
  };

  const onAddingQuestion = (event) => {
    event.preventDefault();
    let questionsArray = questions;
    const optionsArray = [];
    for (let key in options) {
      optionsArray.push(options[key]);
    }
    let updatedQuestion = { ...question };
    updatedQuestion.questionText = questionText;
    updatedQuestion.points = points;
    if (questionType === "mcq") {
      updatedQuestion.options = optionsArray;
    } else {
      updatedQuestion.minChars = minChars;
      updatedQuestion.maxChars = maxChars;
    }
    questionsArray.push(updatedQuestion);
    setQuestions(questionsArray);
    console.log(questions);
    setQuestion({ type: "mcq" });
    setPoints([]);
    setQuestionText("");
    setMinChars([]);
    setMaxChars([]);
    setOptions({
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
  };

  let keyVal = 1;

  return (
    <Fragment>
      {questions.map((ques) => {
        return (
          <Question key={keyVal++} quesID={keyVal} id={keyVal} {...ques} />
        );
      })}
      <div className={addQuestionClasses.join(" ")}>
        <div className="sm:grid grid-cols-6 items-center">
          <div className="col-span-2 my-2">
            <span>Question 1</span>
          </div>
          <div className="w-40 my-2  col-span-2">
            <select
              name="questionType"
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
              onChange={(event) => typeSelectionHandler(event)}
            >
              <option value="mcq">MCQ</option>
              <option value="short text">Short Text</option>
            </select>
          </div>
          <div className="flex my-2 items-center col-start-7">
            <label className="mb-2 text-sm font-medium text-gray-900 m-1 dark:text-gray-300">
              Points
            </label>
            <input
              name="points"
              id="points"
              type="number"
              className="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Points"
              value={points}
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
        </div>
        <div>
          <textarea
            id="message"
            name="questionText"
            rows="2"
            className="block m-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Question..."
            value={questionText}
            onChange={(event) => onChangeHandler(event)}
          ></textarea>
        </div>
        {mcq && (
          <div className="">
            <div className="flex my-1" style={{ margin: "1rem" }}>
              <input type="radio" disabled />
              <input
                name="option1"
                type="text"
                id="small-input"
                className="p-2 mx-2 w-20 md:w-40 lg:w-56 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option1"
                value={options.option1}
                onChange={(event) => addOptionHandler(event)}
              />
            </div>
            <div className="flex my-1" style={{ margin: "1rem" }}>
              <input type="radio" disabled />
              <input
                name="option2"
                type="text"
                id="small-input"
                className="p-2 mx-2 w-20 md:w-40 lg:w-56 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option2"
                value={options.option2}
                onChange={(event) => addOptionHandler(event)}
              />
            </div>
            <div className="flex my-1" style={{ margin: "1rem" }}>
              <input type="radio" disabled />
              <input
                name="option3"
                type="text"
                id="small-input"
                className="p-2 mx-2 w-20 md:w-40 lg:w-56 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option3"
                value={options.option3}
                onChange={(event) => addOptionHandler(event)}
              />
            </div>
            <div className="flex my-1" style={{ margin: "1rem" }}>
              <input type="radio" disabled />
              <input
                name="option4"
                type="text"
                id="small-input"
                className="p-2 mx-2 w-20 md:w-40 lg:w-56 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option4"
                value={options.option4}
                onChange={(event) => addOptionHandler(event)}
              />
            </div>
          </div>
        )}
        {shortText && (
          <div className="flex">
            <div className="mx-8">
              <label className="text-slate-400 text-xs">Min Chars</label>
              <input
                name="minChars"
                type="number"
                className="p-2 mx-2 w-16  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={minChars}
                onChange={(event) => addTextLimit(event)}
              />
            </div>
            <div className="mx-8">
              <label className="text-slate-400 text-xs">Max Chars</label>
              <input
                name="maxChars"
                type="number"
                className="p-2 mx-2 w-16 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={maxChars}
                onChange={(event) => addTextLimit(event)}
              />
            </div>
          </div>
        )}
        <div className="flex justify-center items-center">
          <button
            className="text-slate-500 hover:bg-blue-300 bg-slate-300 font-medium rounded-lg text-sm px-16 py-2.5 text-center mr-2 mb-2"
            onClick={(event) => onAddingQuestion(event)}
          >
            Add Question
          </button>
          <button className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-16 py-2.5 text-center mr-2 mb-2">
            save
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddQuestion;
