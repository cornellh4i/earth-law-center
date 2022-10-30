import React, { useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import './CorsErrorPage.css';
import Button from '../Button/Button.jsx';

/**
 * Component for a general header to be used all over the webiste
 * @param {title} is the title of the page
 * @param {description} is the description of the page
 * @param {hasSearch} is whether or not the page has a search bar
 * @param {searchBarPlaceholder} is the search bar placeholder text
 * @param {search} is the current text of the search bar
 * @param {search_bar} is the ref of the search bar
 */
const Header = (props) => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="error-page">
      <div className="background" />
      <div className="error-rectangle">
        <div className="content-container">
          <img src="../properties/frog-gal.png" alt="Frog :)" />
          <div className="text-button-container">
            <h1 className='oops'>Oops!</h1>
            <p className='error-body'>Please finishing logging in or return to the previous page to start over.</p>
            <Button css='home-btn' text='Back to Home'></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
