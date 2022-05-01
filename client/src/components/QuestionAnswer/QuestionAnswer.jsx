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
 * @param {progress} is the id of the current selected page; used to measure total progress
 * @param {length} is the total number of pages that must be completed
*/

const QuestionAnswer = (props) => {
  /** The user's answers to the field questions. Each answer consists of a list of
   * the following format: ['<question asked>', '<user response>'] */
  const [inputs, setInputs] = useState({});

  /** List of all US states and territories; used for the states dropdown select */
  const us_states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Canal Zone', 'Colorado', 'Connecticut',
    'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
    'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]

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
              {us_states.map(state =>
                <MenuItem value={state}>{state}</MenuItem>
              )}
            </TextField>
          </FormControl>
        </Box>
      }
    </div>
  )

  return (
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
            <Button text='Skip'
              handleClick={handleSkip}
              css='white-median-btn'
            />
            <Button text={props.progress === (props.length - 1) ? 'Finish' : 'Next'}
              handleClick={handleSubmit}
              css='continue-btn'
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionAnswer;