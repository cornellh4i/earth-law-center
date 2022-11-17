import React, { useState } from 'react';
import './QuestionAnswer.css';
import Button from '../Button/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

/** Component for a Q&A component on the Template Form Filler page
 * @param {field} is the title of the currently selected page
 * @param {fieldId} is the id of the current selected page
 * @param {title} is the template title
 * @param {question} is the question string
 * @param {inputType} is the inputType of the question
 * @param {length} is the total number of pages
 * @param {handleBack} is a function that handles pressing the 'Back' button
 * @param {handleSkip} is a function that handles pressing the 'Skip' button
 * @param {handleNext} is a function that handles pressing the 'Next' button
 * @param {handleAuth} is a function that handles user authentication
 * @param {handleSubmit} is a function that handles pressing the 'Finish' button
 * @param {authenticated} is a boolean representing whether or not the user has authenticated
*/

const QuestionAnswer = (props) => {
  // Stores user answers; a dict where key: value = fieldId: user_input
  const [inputs, setInputs] = useState(props.inputs);

  // List of all US states and territories; used for the states dropdown select
  const us_states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Canal Zone', 'Colorado', 'Connecticut',
    'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
    'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]

  // Handles user field changes and updates the input variable
  const handleChange = (e) => {
    const id = props.fieldId
    const value = e.target.value
    setInputs(values => ({ ...values, [id]: value }))
    props.setInputs(values => ({ ...values, [id]: value }))
  }

  return (
    <div className='question-component'>
      <Typography pt={1} pb={1} variant='h6' sx={{ fontFamily: 'Nunito' }}>{props.title}</Typography>
      <Typography pt={1} pb={1} variant='h4'
        sx={{ fontWeight: 'bold', fontFamily: 'Nunito', color: '#64926E', fontSize: 36 }}>
        {props.field}
      </Typography>

      {/* Question component */}
      <div className='question-items'>
        <Typography pt={3} pb={1} variant='body2'>{props.question}</Typography>

        {/* Text input answer component */}
        {props.inputType === 'short answer' &&
          <Box>
            <TextField
              className='text-input'
              name={props.question}
              value={inputs[props.fieldId] || ''}
              label='Type answer here'
              size='small'
              fullWidth
              onChange={handleChange}
              InputLabelProps={{ style: { fontFamily: 'Nunito' } }}
            />
          </Box>
        }

        {/* States dropdown select answer component */}
        {props.inputType === 'states dropdown' &&
          <Box>
            <FormControl>
              <TextField
                select
                className='select-input'
                name={props.question}
                value={inputs[props.fieldId] || ''}
                onChange={handleChange}
                label='Select State'
                size='small'
                variant='outlined'
                InputLabelProps={{ style: { fontFamily: 'Nunito' } }}

              >
                {us_states.map(state =>
                  <MenuItem key={state} value={state}>{state}</MenuItem>
                )}
              </TextField>
            </FormControl>
          </Box>
        }
      </div>

      {/* Button positioning */}
      <Grid container direction='row' spacing={4} pt={4} justifyContent='flex-end'>
        <Grid item xs={4}>
            <Button
              text='BACK'
              handleClick={e => props.handleBack(e)}
              css='back-btn'
            />
        </Grid>
        <Grid item xs={8}>
          <Box display='flex' justifyContent='flex-end'>
            <Button
              text='SKIP'
              handleClick={e => props.handleSkip(e)}
              css={props.authenticated ? 'white-median-btn' : 'hidden'}
            />
            {props.authenticated
              // Next/Finish button after user authenticates
              ? <Button
                text={
                  props.fieldId === (props.length - 1)
                    ? 'FINISH'
                    : 'NEXT'
                }
                handleClick={
                  props.fieldId === (props.length - 1)
                    ? e => props.handleSubmit(inputs)
                    : e => props.handleNext()
                }
                css='continue-btn'
              />

              // Google sign in button when the user is not authenticated
              : <Button
                text='NEXT'
                handleClick={(e) => props.handleAuth()}
                css='continue-btn'
              />
            }
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionAnswer;