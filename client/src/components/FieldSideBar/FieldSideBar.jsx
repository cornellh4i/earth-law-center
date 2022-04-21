import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import './FieldSideBar.css';

/** Component for a Field Side Bar
 * @param {title} is the title header of the sidebar
 * @param {field} is a list of strings containing all fields in a Google Doc
*/

const FieldSideBar = (props) => {
  const [click, setClick] = useState('');
  const fieldItem = props.field.map((field) =>
    <div>
      <div className='side-btn' onClick={() => setClick(field)}>{field}</div>
    </div>
  )

  // To test if state works
  const TestState = () => {
    // Clicked button should show up on the screen 
    return <h1>{click}</h1>
  }

  return (
    <div className='fieldsidebar'>
      {/* Space for progress bar */}
      <div>
        <Typography pt={1} pb={5} variant='h5' component='div' sx={{ fontWeight: 'bold' }}>{props.title}</Typography>
      </div>
      <div className='bar-div'>{fieldItem}</div>

      {/* Testing clicked saved correctly */}
      <TestState />
    </div>
  );
};

export default FieldSideBar;