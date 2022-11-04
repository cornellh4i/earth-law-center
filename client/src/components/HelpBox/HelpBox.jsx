import React from 'react';
import './HelpBox.css';

/** Component for a Resource card
 * @param {title} is the title of the help box
 * @param {description} is the description of the help box
*/

const HelpBox = (props) => {
  return (
    <div className='helpBox'>
      <div className={'helpBoxTitle'}>{props.title}</div>
      <div className={'helpBoxDescription'}>{props.description}</div>
    </div>
  );
};

export default HelpBox;
