import React from 'react';
import './HelpBox.css';

/** Component for a Resource card */
const HelpBox = (props) => {
  return (
    <div className='helpBox'>
      <div className={'helpBoxTitle'}>{props.title}</div>
      <div className={'helpBoxDescription'}>{props.description}</div>
    </div>
  );
};

export default HelpBox;
