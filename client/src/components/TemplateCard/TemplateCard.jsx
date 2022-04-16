import React from 'react';
import './TemplateCard.css';
import Button from '../Button/Button.jsx';
import downloadbtn from './assets/download-btn.png';

/** Component for TemplateCard Page */

const TemplateCard = (props) => {
  return (
    <div className='card-container'>
      <div className='card-text-container'>
        <h1 className='card-title'>{props.title}</h1>
        <p className='card-summary'>{props.summary}</p>
      </div>
      <div className='card-btn-container'>
        <Button css='card-edit-btn' onClick={props.edit} text="EDIT"></Button>
        <button className='card-download-btn' onClick={props.download}><img className='download-img' src={downloadbtn} alt='download'/></button>
      </div>
    </div>
    
  );
};
export default TemplateCard;
