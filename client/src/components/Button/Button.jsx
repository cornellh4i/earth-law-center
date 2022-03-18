import React from 'react';
import styles from './Button.css';

/** Component for a general button to be used all over the webiste */

// TODO: Add 3 props to this button so that it takes in a text that would be in the place of "Simple Button", 
//       function to replace the console.log("here"), and a css class that will style the button
//       (the names of the css classes that the button can take in are in Button.css)

const Button = () => {
  return (
    <button onClick={console.log("clicked!")}>Simple Button</button>
  );
};
export default Button;
