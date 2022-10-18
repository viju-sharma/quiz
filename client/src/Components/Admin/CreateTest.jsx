import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import AddQuestion from '../Questions/AddQuestion/AddQuestion';

const CreateTest = () => {
  return (
    <Fragment>
      <Navigation />
      <AddQuestion />
    </Fragment>
  );
};

export default CreateTest;
