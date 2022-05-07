import Box from '@mui/material/Box';
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
  const filters = {
    local: props.jurisdiction === "local",
    regional: props.jurisdiction === "regional",
    national: props.jurisdiction === "national",
    international: props.jurisdiction === "international",
    ordinance: props.law === "ordinance",
    resolution: props.law === "resolution",
  };

  var matchlaw = false;
  var matchordinance = false;

  if(props.currentFilter.ordinance === false && 
    props.currentFilter.resolution === false) {matchlaw = true;}
  else if((props.currentFilter.ordinance === filters.ordinance && filters.ordinance === true) || 
    (props.currentFilter.resolution === filters.resolution && filters.resolution === true)) {matchlaw = true;}

  if(props.currentFilter.local === false && 
    props.currentFilter.regional === false && 
    props.currentFilter.national === false && 
    props.currentFilter.international === false){matchordinance = true;}
  else if((props.currentFilter.local === filters.local && filters.local === true) || 
    (props.currentFilter.regional === filters.regional && filters.regional === true) || 
    (props.currentFilter.national === filters.national && filters.national === true) || 
    (props.currentFilter.international === filters.international && filters.international === true)){matchordinance = true;}

    console.log(props.currentFilter);
  if(!(matchlaw && matchordinance)){
    return null;
  }

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
      {props.letter ? <></> : 
        <div className='tag-container'>
          <Button css='card-type-btn' text={props.law}></Button>
          <Button css='card-type-btn' text={props.jurisdiction}></Button>
        </div>
        }
      {card_content}
      <div className='card-btn-container'>
        <Button css='card-edit-btn' onClick={props.edit} text="EDIT"></Button>
        <button className='card-download-btn' onClick={props.download}><img className='download-img' src={downloadbtn} alt='download'/></button>
      </div>
    </div>
    
  );
};
export default TemplateCard;
