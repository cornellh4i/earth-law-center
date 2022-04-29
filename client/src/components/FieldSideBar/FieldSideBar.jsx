import React, { useState, useCallback } from 'react'
import Typography from '@mui/material/Typography';
import './FieldSideBar.css';
import LinearProgressWithLabel from './ProgressBar';
import Box from '@mui/material/Box';
import { useBetween } from "use-between";

/** Component for a Field Side Bar
 * @param {title} is the title header of the sidebar
 * @param {field} is a list of strings containing all fields in a Google Doc
 * @param {progress} is an int where 0 < progress < 100, representing how close the user is to completion
*/

const FieldSideBar = (props) => {
  // Sidebar section currently being viewed by the user

  const [clickedField, setClickedField] = useState('');


  

  // Value to render in the progress bar
  const [progress, setProgress] = useState(props.progress);

  const fieldItem = props.field.map((field) =>
    <div>
      <div className='side-btn' onClick={() => handleClick(field)}>{field}</div>
    </div>
  )

  const handleClick = (field) => {
    setClickedField(field);
  }

  return (
    <div className='field-sidebar'>
      {/* Header title */}
      <Typography pt={5} pb={3} variant='h5' component='div' sx={{ fontWeight: 'bold' }}>{props.title}</Typography>

      {/* Progress bar */}
      <Box pb={3} sx={{ display: 'flex', alignItems: 'center' }}>
      <LinearProgressWithLabel value={progress} color = 'inherit'/>
      </Box>

      {/* Field items */}
      <div className='bar-div'>{fieldItem}</div>
    </div>
  );
};

export default FieldSideBar;