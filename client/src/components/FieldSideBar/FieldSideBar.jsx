import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { useRef } from 'react'
import './FieldSideBar.css';

/** Component for a Field Side Bar
 * @param {title} is the title header of the sidebar
 * @param {field} is a list of strings containing all fields in a Google Doc
*/

const FieldSideBar = (props) => {
  const [clickedField, setClickedField] = useState('');
  const fieldItem = props.field.map((field) =>
    <div>
      <div className='side-btn' onClick={() => handleClick(field)}>{field}</div>
    </div>
  )

  const handleClick = (field) => {
    setClickedField(field);
  }

  return (
    <div className='fieldsidebar'>
      <Typography pt={5} pb={5} variant='h5' component='div' sx={{ fontWeight: 'bold' }}>{props.title}</Typography>
      {/* Space for progress bar */}
      <div className='bar-div'>{fieldItem}</div>
    </div>
  );
};

export default FieldSideBar;