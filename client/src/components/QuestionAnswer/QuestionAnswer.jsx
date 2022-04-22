import React from 'react';
import './QuestionAnswer.css';
import Typography from '@mui/material/Typography';

/** Component for a Q&A component on the Template Form Filler page
 * @param {field} is the field name selected in the navigation sidebar
 * @param {title} is the title of the template law/letter
 * @param {questions} is a list of lists; each nested list is a single question
 * of the following format: ["<input type>", "<question content"]. Valid input
 * types currently include "text input", "dropdown select", "states dropdown select"
*/

const QuestionAnswer = (props) => {
  const questionItem = props.questions.map((question) =>
    <div>
      {/* Question component */}
      <b>{question[1]}</b>
    
      {/* Answer component */}
      {question[0] == "text input" && <div>text input</div>}
      {question[0] == "dropdown select" && <div>dropdown</div>}
      {question[0] == "states dropdown select" && <div>states dropdown</div>}
    </div>
  )

  return (
    <div>
      <Typography pt={1} pb={1} variant='h6'>{props.title}</Typography>
      <Typography pt={1} pb={1} variant='h4' sx={{ fontWeight: 'bold' }}>{props.field}</Typography>
      {questionItem}
      {/* {props.questions} */}
    </div>
  );
};

export default QuestionAnswer;