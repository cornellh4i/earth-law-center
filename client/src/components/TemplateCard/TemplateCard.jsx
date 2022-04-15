import React from 'react';
import './TemplateCard.css';
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
        <button className='card-edit-btn' onClick={props.edit}>EDIT</button>
        <button className='card-download-btn' onClick={props.download}><img className='download-img' src={downloadbtn} alt='download'/></button>
      </div>
    </div>
    
  );
};
export default TemplateCard;
