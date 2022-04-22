import React from 'react';
import './QuestionAnswer.css';
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
  const [answers, setAnswers] = useState([]);

  const questionItem = props.questions.map((question) =>
    <div>
      {/* Question component */}
      <b>{question[1]}</b>

      {/* Text input answer component */}
      {question[0] == "text input" &&
        <div><input type="text" /></div>
      }

      {/* States dropdown select answer component */}
      {question[0] == "states dropdown select" &&
        <div>
          <select>
            <option value="">Alabama</option>
            <option value="">Alaska</option>
            <option value="">Arizona</option>
            <option value="">Arkansas</option>
            <option value="">California</option>
            <option value="">Canal Zone</option>
            <option value="">Colorado</option>
            <option value="">Connecticut</option>
            <option value="">Delaware</option>
            <option value="">District of Columbia</option>
            <option value="">Florida</option>
            <option value="">Georgia</option>
            <option value="">Guam</option>
            <option value="">Hawaii</option>
            <option value="">Idaho</option>
            <option value="">Illinois</option>
            <option value="">Indiana</option>
            <option value="">Iowa</option>
            <option value="">Kansas</option>
            <option value="">Kentucky</option>
            <option value="">Louisiana</option>
            <option value="">Maine</option>
            <option value="">Maryland</option>
            <option value="">Massachusetts</option>
            <option value="">Michigan</option>
            <option value="">Minnesota</option>
            <option value="">Mississippi</option>
            <option value="">Missouri</option>
            <option value="">Montana</option>
            <option value="">Nebraska</option>
            <option value="">Nevada</option>
            <option value="">New Hampshire</option>
            <option value="">New Jersey</option>
            <option value="">New Mexico</option>
            <option value="">New York</option>
            <option value="">North Carolina</option>
            <option value="">North Dakota</option>
            <option value="">Ohio</option>
            <option value="">Oklahoma</option>
            <option value="">Oregon</option>
            <option value="">Pennsylvania</option>
            <option value="">Puerto Rico</option>
            <option value="">Rhode Island</option>
            <option value="">South Carolina</option>
            <option value="">South Dakota</option>
            <option value="">Tennessee</option>
            <option value="">Texas</option>
            <option value="">Utah</option>
            <option value="">Vermont</option>
            <option value="">Virgin Islands</option>
            <option value="">Virginia</option>
            <option value="">Washington</option>
            <option value="">West Virginia</option>
            <option value="">Wisconsin</option>
            <option value="">Wyoming</option>
          </select>
        </div>
      }
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