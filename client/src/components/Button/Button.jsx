import React from 'react';
import './Button.css';
import MButton from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';

/** Component for a general button to be used all over the webiste 
 *  @param text is the text on the button 
 *  @param handleClick is the function that called when the button is clicked
 *  @param css is a css class that can be found in Button.css 
*/

const Button = ({ text, handleClick, css }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MButton className={css} onClick={handleClick}>{text}</MButton>
    </StyledEngineProvider>
  );
};
export default Button;
