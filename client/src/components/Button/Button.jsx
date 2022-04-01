import React from 'react';
import './Button.css';

/** Component for a general button to be used all over the webiste 
 *  @param text is the text on the button 
 *  @param handleClick is the function that called when the button is clicked
 *  @param css is a css class that can be found in Button.css 
*/

const Button = ({ text, handleClick, css }) => {  
  return (
    <button className={css} onClick={handleClick}>{text}</button>
  );
};
export default Button;
