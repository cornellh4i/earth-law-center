import React, { useState } from 'react';
import './QuestionAnswer.css';
import Button from '../Button/Button';
import Typography from '@mui/material/Typography';

/** Component for a Q&A component on the Template Form Filler page
 * @param {field} is the field name selected in the navigation sidebar
 * @param {title} is the title of the template law/letter
 * @param {questions} is a list of lists; each nested list is a single question
 * of the following format: ["<input type>", "<question content"]. Valid input
 * types currently include "text input", "states dropdown select"
*/

const QuestionAnswer = (props) => {
  // Each answer consists of a list of the following format: ["<question asked>", "user response"]
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }
  
  const handleBack = (e) => {
    // Code here
  }
  
  const handleSkip = (e) => {
    // Code here
  }

  // Note: question[0] = <input type> and question[1] = <question content>
  const questionItems = props.questions.map((question) =>
    <div>
      {/* Question component */}
      <b>{question[1]}</b>

      {/* Text input answer component */}
      {question[0] === "text input" &&
        <div>
          <input type="text" name={question[1]} value={inputs[question[1]] || ""} onChange={handleChange} />
        </div>
      }

      {/* States dropdown select answer component */}
      {question[0] === "states dropdown select" &&
        <div>
          <select name={question[1]} value={inputs[question[1]] || ""} onChange={handleChange}>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Canal Zone">Canal Zone</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District of Columbia">District of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Guam">Guam</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virgin Islands">Virgin Islands</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>
      }
    </div>
  )

  return (
    <div>
      <Typography pt={1} pb={1} variant='h6'>{props.title}</Typography>
      <Typography pt={1} pb={1} variant='h4' sx={{ fontWeight: 'bold' }}>{props.field}</Typography>
        {questionItems}
        <Button text="Back" handleClick={handleBack} css="back-btn" />
        <Button text="Skip" handleClick={handleSkip} css="grey-large-btn" />
        <Button text="Next" handleClick={handleSubmit} css="continue-btn" />
    </div>
  );
};

export default QuestionAnswer;