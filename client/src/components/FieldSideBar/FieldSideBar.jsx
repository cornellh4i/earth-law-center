import React, { useState, useCallback } from 'react'
import Typography from '@mui/material/Typography';
import './FieldSideBar.css';
import LinearProgressWithLabel from './ProgressBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

/** Component for a Field Side Bar
 * @param {title} is the title header of the sidebar
 * @param {fields} is a list of strings containing all fields in a Google Doc
 * @param {progress} is an int where 0 < progress < 100, representing how close the user is to completion
 * @param {handleClick}
*/

const FieldSideBar = (props) => {
  /** Styling and functionality for sidebar navigation buttons */
  const fieldItem = props.fields.map(field =>
    <div className='side-btn' onClick={() => props.handleClick(field)}>{field}</div>
  )

  return (
    <Drawer
      className='sidebar'
      variant='permanent'
      anchor='left'
    >
      <div className='sidebar-content'>
        {/* Header title */}
        <Typography pt={3} pb={3} variant='h5' component='div' sx={{ fontWeight: 'bold' }}>{props.title}</Typography>

        {/* Progress bar */}
        <Box pb={3} sx={{ display: 'flex', alignItems: 'center' }}>
          <LinearProgressWithLabel value={props.progress} color='inherit' />
        </Box>

        {/* Field items */}
        <div className='bar-div'>{fieldItem}</div>
      </div>
    </Drawer>
  );
};

export default FieldSideBar;