import React, { useState } from 'react'
import './FieldSideBar.css';

/** Component for a Field Side Bar
 * @param {field} is a list of strings containing all fields in a Google Doc
*/

const FieldSideBar = (props) => {
  const [click, setClick] = useState('');
  const fieldItem = props.field.map((field) =>
    <li>
      <button className='side-btn' onClick={() => setClick(field)}>{field}</button>
    </li>
  )

  // To test if state works
  const TestState = () => {
    // Clicked button should show up on the screen 
    return <h1>{click}</h1>
  }

  return (
    <div className='sidebar-component'>
      {/* Space for progress bar */}
      <div>
        <h1>Progress Bar</h1>
      </div>
      {/* *** */}
      <ul className='bar-ul'>{fieldItem}</ul>

      {/* Testing clicked saved correctly */}
      <TestState />
    </div>
  );
};

export default FieldSideBar;