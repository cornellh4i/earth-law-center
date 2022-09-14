import Box from '@mui/material/Box';
import React from 'react';
import './TemplateCard.css';
import Button from '../Button/Button.jsx';
import downloadbtn from './assets/download-btn.png';
import { Link } from 'react-router-dom'

/** Component for TemplateCard Page 
 * @param {title} is the title of the card
 * @param {summary} is the summary of the card 
 * @param {edit} is the function that allows you to edit the template
 * @param {download} is the function that allows you to download a template 
 * @param {law} is the type of law for the filter
 * @param {jurisdiction} is the type of jurisdiction for the filter
 * @param {currentFilter} is the current state of the MultiSelectFilter component
*/

const TemplateCard = (props) => {
  // an object containing the filter flags that this TemplateCard should trigger
  const filters = {
    local: props.jurisdiction === "local",
    regional: props.jurisdiction === "regional",
    national: props.jurisdiction === "national",
    international: props.jurisdiction === "international",
    ordinance: props.law === "ordinance",
    resolution: props.law === "resolution",
  };

  // variables representing if the law/jurisdiction of this TemplateCard matches the current filter state
  var matchlaw = false;
  var matchjurisdiction = false;

  // sets matchordinance to true if 
  // 1. the law section of the filter is untouched or 
  // 2. the filter checkbox corresponding to the law prop of this TemplateCard is checked
  if(props.currentFilter.ordinance === false && 
    props.currentFilter.resolution === false) {matchlaw = true;}
  else if((props.currentFilter.ordinance === filters.ordinance && filters.ordinance === true) || 
    (props.currentFilter.resolution === filters.resolution && filters.resolution === true)) {matchlaw = true;}

  // sets matchordinance to true if 
  // 1. the jurisdiction section of the filter is untouched or 
  // 2. the filter checkbox corresponding to the jurisdiction prop of this TemplateCard is checked
  if(props.currentFilter.local === false && 
    props.currentFilter.regional === false && 
    props.currentFilter.national === false && 
    props.currentFilter.international === false){matchjurisdiction = true;}
  else if((props.currentFilter.local === filters.local && filters.local === true) || 
    (props.currentFilter.regional === filters.regional && filters.regional === true) || 
    (props.currentFilter.national === filters.national && filters.national === true) || 
    (props.currentFilter.international === filters.international && filters.international === true)){matchjurisdiction = true;}

  // if the card does not match the current filter state, don't render
  if(!(matchlaw && matchjurisdiction)){
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
      {/* only render the TemplateCard's tag if it is a law card, not a letter card */}
      {props.letter ? <></> : 
        <div className='tag-container'>
          <Button css='card-type-btn' text={props.law}></Button>
          <Button css='card-type-btn' text={props.jurisdiction}></Button>
        </div>
        }
      {card_content}
      <div className='card-btn-container'>
        {/* <Button css='card-edit-btn' onClick={props.edit} text="EDIT"></Button> */}
        {/* The below button is just for the showcase! */}
        <Link
          to='/template-filler'
          state={{ docID: '1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os' }}
        >
          <Button css='card-edit-btn' onClick={props.edit} text="EDIT"></Button>
        </Link>
        <button className='card-download-btn' onClick={props.download}><img className='download-img' src={downloadbtn} alt='download'/></button>
      </div>
    </div>
    
  );
};
export default TemplateCard;
