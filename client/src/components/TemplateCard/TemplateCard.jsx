import React from 'react';
import './TemplateCard.css';
import Button from '../Button/Button';

/** Component for TemplateCard Page */

const TemplateCard = () => {
  return (
    <div className='cardContainer'>
      <div className='cardTextContainer'>
        <h1>Title</h1>
        <p>summary of law Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='cardButtonContainer'>
        <Button className='cardEditButton' text="EDIT"/>
        <Button className='cardDownloadButton'/>
      </div>
    </div>
  );
};
export default TemplateCard;
