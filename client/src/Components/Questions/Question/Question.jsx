import React, {Fragment, useState} from 'react';
import classes from './Question.module.css';

const Question = (props) => {

  const addQuestionClasses = [classes.question, "rounded-xl shadow border p-8 m-10"];

  const onChangeHandler = () => {

  }

  return (
    <Fragment>
      <div className={addQuestionClasses.join(' ')}>
        <h2>Question {props.quesID}</h2>
        <p className={classes.questionText}>{props.questionText}?</p>
        <p className={classes.points}>Points : {props.points}</p>
        {props.options && props.options.map(option => (
          <div key={option} className="flex my-1" style={{margin: '1rem', marginLeft: '2rem'}}>
            <input type="radio" name="option1" value={option} defaultChecked={false} onChange={(event) => onChangeHandler(event)} />
            <p>{option}</p>
          </div>
        ))}
        <div style={{display: 'flex', marginLeft: '2rem'}}>
          {props.minChars && (<p style={{marginRight: '2rem'}}>Min Chars : {props.minChars}</p>)}
          {props.maxChars && (<p>Max Chars : {props.maxChars}</p>)}
        </div>
      </div>
    </Fragment>
  )
}

export default Question