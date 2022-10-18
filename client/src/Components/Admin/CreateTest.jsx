import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import AddQuestion from "../Questions/AddQuestion/AddQuestion";

const CreateTest = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="flex justify-center items-center">
        <div className="container mx-16 my-5">
          <AddQuestion />
        </div>
      </div>
    </Fragment>
  );
};

export default CreateTest;
