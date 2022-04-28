import React, { useState } from 'react';
import './QuestionAnswer.css';
import Button from '../Button/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

/** Component for a Q&A component on the Template Form Filler page
 * @param {field} is the field name selected in the navigation sidebar
 * @param {title} is the title of the template law/letter
 * @param {questions} is a list of lists; each nested list is a single question
 * of the following format: ['<input type>', '<question content']. Valid input
 * types currently include 'text input', 'states dropdown select'
*/

const QuestionAnswer = (props) => {
  /** The user's answers to the field questions. Each answer consists of a list of
   * the following format: ['<question asked>', '<user response>'] */
  const [inputs, setInputs] = useState({});

  /** Handles user field changes and updates the inputs variable */
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  /** Handles user pressing the 'Next' button */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  /** Handles user pressing the 'Back' button */
  const handleBack = (e) => {
    // Code here
  }

  /** Handles user pressing the 'Skip' button */
  const handleSkip = (e) => {
    // Code here
  }

  /** A component consisting of all questions from props.questions.
   * Note: question[0] = <input type> and question[1] = <question content> */
  const questionItems = props.questions.map((question) =>
    <div>
      {/* Question component */}
      <Typography pt={3} pb={1} variant='body2'>{question[1]}</Typography>

      {/* Text input answer component */}
      {question[0] === 'text input' &&
        <Box>
          <TextField
            className='text-input'
            name={question[1]}
            value={inputs[question[1]] || ''}
            label='Type answer here'
            size='small'
            fullWidth
            onChange={handleChange}
          />
        </Box>
      }

      {/* States dropdown select answer component */}
      {question[0] === 'states dropdown select' &&
        <Box>
          <FormControl>
            <TextField
              select
              className='select-input'
              name={question[1]}
              value={inputs[question[1]] || ''}
              onChange={handleChange}
              label='Select State'
              size='small'
              variant='outlined'
            >
              <MenuItem value='Alabama'>Alabama</MenuItem>
              <MenuItem value='Alaska'>Alaska</MenuItem>
              <MenuItem value='Arizona'>Arizona</MenuItem>
              <MenuItem value='Arkansas'>Arkansas</MenuItem>
              <MenuItem value='California'>California</MenuItem>
              <MenuItem value='Canal Zone'>Canal Zone</MenuItem>
              <MenuItem value='Colorado'>Colorado</MenuItem>
              <MenuItem value='Connecticut'>Connecticut</MenuItem>
              <MenuItem value='Delaware'>Delaware</MenuItem>
              <MenuItem value='District of Columbia'>District of Columbia</MenuItem>
              <MenuItem value='Florida'>Florida</MenuItem>
              <MenuItem value='Georgia'>Georgia</MenuItem>
              <MenuItem value='Guam'>Guam</MenuItem>
              <MenuItem value='Hawaii'>Hawaii</MenuItem>
              <MenuItem value='Idaho'>Idaho</MenuItem>
              <MenuItem value='Illinois'>Illinois</MenuItem>
              <MenuItem value='Indiana'>Indiana</MenuItem>
              <MenuItem value='Iowa'>Iowa</MenuItem>
              <MenuItem value='Kansas'>Kansas</MenuItem>
              <MenuItem value='Kentucky'>Kentucky</MenuItem>
              <MenuItem value='Louisiana'>Louisiana</MenuItem>
              <MenuItem value='Maine'>Maine</MenuItem>
              <MenuItem value='Maryland'>Maryland</MenuItem>
              <MenuItem value='Massachusetts'>Massachusetts</MenuItem>
              <MenuItem value='Michigan'>Michigan</MenuItem>
              <MenuItem value='Minnesota'>Minnesota</MenuItem>
              <MenuItem value='Mississippi'>Mississippi</MenuItem>
              <MenuItem value='Missouri'>Missouri</MenuItem>
              <MenuItem value='Montana'>Montana</MenuItem>
              <MenuItem value='Nebraska'>Nebraska</MenuItem>
              <MenuItem value='Nevada'>Nevada</MenuItem>
              <MenuItem value='New Hampshire'>New Hampshire</MenuItem>
              <MenuItem value='New Jersey'>New Jersey</MenuItem>
              <MenuItem value='New Mexico'>New Mexico</MenuItem>
              <MenuItem value='New York'>New York</MenuItem>
              <MenuItem value='North Carolina'>North Carolina</MenuItem>
              <MenuItem value='North Dakota'>North Dakota</MenuItem>
              <MenuItem value='Ohio'>Ohio</MenuItem>
              <MenuItem value='Oklahoma'>Oklahoma</MenuItem>
              <MenuItem value='Oregon'>Oregon</MenuItem>
              <MenuItem value='Pennsylvania'>Pennsylvania</MenuItem>
              <MenuItem value='Puerto Rico'>Puerto Rico</MenuItem>
              <MenuItem value='Rhode Island'>Rhode Island</MenuItem>
              <MenuItem value='South Carolina'>South Carolina</MenuItem>
              <MenuItem value='South Dakota'>South Dakota</MenuItem>
              <MenuItem value='Tennessee'>Tennessee</MenuItem>
              <MenuItem value='Texas'>Texas</MenuItem>
              <MenuItem value='Utah'>Utah</MenuItem>
              <MenuItem value='Vermont'>Vermont</MenuItem>
              <MenuItem value='Virgin Islands'>Virgin Islands</MenuItem>
              <MenuItem value='Virginia'>Virginia</MenuItem>
              <MenuItem value='Washington'>Washington</MenuItem>
              <MenuItem value='West Virginia'>West Virginia</MenuItem>
              <MenuItem value='Wisconsin'>Wisconsin</MenuItem>
              <MenuItem value='Wyoming'>Wyoming</MenuItem>
            </TextField>
          </FormControl>
        </Box>
      }
    </div>
  )

  return (
    // The div wrapping the entire component. It's className is <question-component>
    <div className='question-component'>
      <Typography pt={1} pb={1} variant='h6'>{props.title}</Typography>
      <Typography pt={1} pb={1} variant='h4' sx={{ fontWeight: 'bold' }}>{props.field}</Typography>
      {questionItems}

      {/* Button positioning */}
      <Grid container direction='row' spacing={4} pt={2} justifyContent='flex-end'>
        <Grid item xs={6}>
          <Button text='Back' handleClick={handleBack} css='back-btn' />
        </Grid>
        <Grid item xs={6}>
          <Box display='flex' justifyContent='flex-end'>
            <Button text='Skip' handleClick={handleSkip} css='grey-large-btn' />
            <Button text='Next' handleClick={handleSubmit} css='continue-btn' />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionAnswer;