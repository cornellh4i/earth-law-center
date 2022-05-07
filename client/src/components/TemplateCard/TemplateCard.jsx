import React from 'react';
import './TemplateCard.css';
import Button from '../Button/Button.jsx';
import downloadbtn from './assets/download-btn.png';

/** Component for TemplateCard Page 
 * @param {title} is the title of the card
 * @param {summary} is the summary of the card 
 * @param {edit} is the function that allows you to edit the template
 * @param {download} is the function that allows you to download a template 
*/

const TemplateCard = (props) => {
  var card_content = 
    <div className='card-text-container'>
        <h1 className='card-title'>{props.title}</h1>
        <p className='card-summary'>{props.summary}</p>
    </div>
  ;
  if (props.letter){
    card_content = 
    <div className='card-image-text-container'>
      <div className='card-text-container-letter'>
        <div className='card-title-container'>
          <h1 className='card-title'>{props.title}</h1>
        </div>
        <div className='card-summary-container'>
          <p className='card-summary'>{props.summary}</p>
        </div>
      </div>
      <img className='card-letter-preview' src={props.preview}/>
    </div>
  ;
  }
  return (
    <div className='card-container'>
      {props.letter ? <></> : <Button css='card-type-btn' text={props.type}></Button>}
      {card_content}
      <div className='card-btn-container'>
        <Button css='card-edit-btn' onClick={props.edit} text="EDIT"></Button>
        <button className='card-download-btn' onClick={props.download}><img className='download-img' src={downloadbtn} alt='download'/></button>
      </div>
    </div>
    
  );
};
export default TemplateCard;
