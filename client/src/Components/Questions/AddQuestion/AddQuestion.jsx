import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

const AddQuestion = () => {
  const questionsObj = {
    questionNum: 1,
    questionText: "",
    type: "mcq",
    point: "",
    options: [""],
    minChar: "",
    maxChar: "",
  };

  const [questions, setQuestions] = useState([questionsObj]);
  const [subject, setSubject] = useState("");

  const handleSubChange = (e) => {
    const { value } = e.target;
    setSubject(value);
  };

  const addQuestion = () => {
    const lastQuestion = questions.slice(-1)[0];
    if (lastQuestion.questionText === "")
      return alert("Enter Question Text for above Question");
    if (lastQuestion.point === "" || lastQuestion.point <= 0)
      return alert("Enter Point (valid) for above Question");
    if (lastQuestion.type === "mcq" && lastQuestion.options.length <= 1)
      return alert("Enter two choice atleast for above Question");
    const questionNum = questions.length + 1;
    setQuestions((prevQues) => {
      return [...prevQues, { ...questionsObj, questionNum }];
    });
  };

  //   to chnge question Type of a index
  const handleQuestionTypeChange = (e, index) => {
    const { value } = e.target;
    const newArr = [...questions];
    newArr[index] = { ...newArr[index], type: value };
    setQuestions(newArr);
  };

  const handlePointChange = (e, index) => {
    const { value } = e.target;
    const newArr = [...questions];
    newArr[index] = { ...newArr[index], point: value };
    setQuestions(newArr);
  };

  const handleQuestionTextChange = (e, index) => {
    const { value } = e.target;
    const newArr = [...questions];
    newArr[index] = { ...newArr[index], questionText: value };
    setQuestions(newArr);
  };

  const handleOptionEdit = (e, index, optionIndex) => {
    const { value } = e.target;
    const newArr = [...questions];
    const allOptions = questions[index].options;
    allOptions[optionIndex] = value;
    newArr[index] = { ...newArr[index], options: allOptions };
    setQuestions(newArr);
  };

  const handleMinMaxCharChange = (e, index) => {
    const { name, value } = e.target;
    const newArr = [...questions];
    newArr[index] = { ...newArr[index], [name]: value };
    setQuestions(newArr);
  };

  const addOption = (index) => {
    const newArr = [...questions];
    const allOptions = questions[index].options;
    allOptions.push("");
    newArr[index] = { ...newArr[index], options: allOptions };
    setQuestions(newArr);
  };

  const deleteOption = (index, optionIndex) => {
    const newArr = [...questions];
    const allOptions = questions[index].options;
    if (allOptions.length === 1) return;
    allOptions.splice(optionIndex, 1);
    newArr[index] = { ...newArr[index], options: allOptions };
    setQuestions(newArr);
  };

  const handleSaveQuestions = async () => {
    if (subject === "") return alert("enter Subject");
    const lastQuestion = questions.slice(-1)[0];
    if (lastQuestion.questionText === "")
      return alert("Enter Question Text for above Question");
    if (lastQuestion.point === "" || lastQuestion.point <= 0)
      return alert("Enter Point (valid) for above Question");
    if (lastQuestion.type === "mcq" && lastQuestion.options.length <= 1)
      return alert("Enter two choice atleast for above Question");

    const data = { subject, questions };
    await axios
      .post("/api/quiz/addQuiz", data)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <Fragment>
      <div className="flex justify-end items-center">
        <label className="mb-2 text-sm font-medium text-gray-900 m-1 dark:text-gray-300">
          Quiz Submit :
        </label>
        <input
          onChange={handleSubChange}
          value={subject}
          name="subject"
          id="subjects"
          className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your Quiz Subject"
        />
      </div>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {questions.map((question, index) => (
        <div key={index}>
          <div className="sm:grid grid-cols-6 items-center">
            <div className="col-span-2 my-2">
              <span>Question {index + 1}</span>
            </div>
            <div className="w-40 my-2  col-span-2">
              <select
                value={question.type}
                name="questionType"
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => handleQuestionTypeChange(e, index)}
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
                onChange={(e) => handlePointChange(e, index)}
                value={question.point}
                name="points"
                id="points"
                type="number"
                className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g. 5"
              />
            </div>
          </div>
          <div>
            <textarea
              onChange={(e) => handleQuestionTextChange(e, index)}
              value={question.questionText}
              id="message"
              name="questionText"
              rows="2"
              className="block m-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Question..."
            ></textarea>
          </div>

          {question.type === "mcq" ? (
            <div className="">
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="flex my-1"
                  style={{ margin: "1rem" }}
                >
                  <input type="radio" disabled />
                  <input
                    onChange={(e) => handleOptionEdit(e, index, optionIndex)}
                    value={option}
                    type="text"
                    id="small-input"
                    className="p-2 mx-2 w-20 md:w-40 lg:w-56 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Create Option"
                  />
                  {question.options.length > 1 && (
                    <button onClick={() => deleteOption(index, optionIndex)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  )}
                  {optionIndex + 1 === question.options.length && (
                    <button onClick={() => addOption(index)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex">
              <div className="mx-8">
                <label className="text-slate-400 text-xs">Min Chars</label>
                <input
                  value={question.minChar}
                  onChange={(e) => handleMinMaxCharChange(e, index)}
                  name="minChar"
                  type="number"
                  className="p-2 mx-2 w-16  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mx-8">
                <label className="text-slate-400 text-xs">Max Chars</label>
                <input
                  value={question.maxChar}
                  onChange={(e) => handleMinMaxCharChange(e, index)}
                  name="maxChar"
                  type="number"
                  className="p-2 mx-2 w-16 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {index + 1 === questions.length && (
            <div className="flex justify-center items-center">
              <button
                onClick={addQuestion}
                className="text-slate-500 hover:bg-blue-300 bg-slate-300 font-medium rounded-lg text-sm px-16 py-2.5 text-center mr-2 mb-2"
              >
                Add Question
              </button>
              <button
                onClick={handleSaveQuestions}
                className="text-white bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-16 py-2.5 text-center mr-2 mb-2"
              >
                save
              </button>
            </div>
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default AddQuestion;
