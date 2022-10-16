import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";

const CreateTest = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="rounded-xl shadow border p-8 m-10">
        <div className="sm:grid grid-cols-6 items-center">
          <div className="col-span-2 my-2">
            <span>Question 1</span>
          </div>
          <div className="w-40 my-2  col-span-2">
            <select
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="1">MCQ</option>
              <option value="2">Sort Text</option>
            </select>
          </div>
          <div className="flex my-2 items-center col-start-7">
            <label className="mb-2 text-sm font-medium text-gray-900 m-1 dark:text-gray-300">
              Point
            </label>
            <input
              type="text"
              className="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="point"
              required
            />
          </div>
        </div>
        <div>
          <textarea
            id="message"
            rows="2"
            className="block m-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Question..."
          ></textarea>
        </div>
        <div className="">
          <div className="flex my-1">
            <input type="radio" />
            <input
              type="text"
              id="small-input"
              className="p-2 mx-2 w-20 md:w-40 lg:w-56 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Option1"
            />
          </div>
          <div className="flex my-1">
            <input type="radio" />
            <input
              type="text"
              id="small-input"
              className="p-2 mx-2 w-20 md:w-40 lg:w-56 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Option2"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mx-8">
            <label className="text-slate-400 text-xs">Min Chars</label>
            <input
              type="number"
              className="p-2 mx-2 w-16  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mx-8">
            <label className="text-slate-400 text-xs">Max Chars</label>
            <input
              type="number"
              className="p-2 mx-2 w-16 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="text-slate-500 hover:bg-blue-300 bg-slate-300 font-medium rounded-lg text-sm px-16 py-2.5 text-center mr-2 mb-2">
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

export default CreateTest;
