import React, {useImperativeHandle, useState, forwardRef} from 'react';
import TextField from '@mui/material/TextField';
import './SearchBar.css'

/**
 * Component for a search bar to be used in the headers of the website
 * @param {currentText} is the current text of the search bar
 */

const SearchBar = forwardRef((props, _ref) => {

  const [currentText, setCurrentText] = useState("");

  useImperativeHandle(_ref, () => ({
      getCurrentText: () => {
          return currentText;
      },
  }));

  return (
    <TextField 
        placeholder={props.placeholder} 
        className="search-bar"
        sx={{
            width: "80%",
            minWidth: 150,
            backgroundColor: 'white',
            borderRadius: '0.9375rem',
        }} 
        onChange={(e) => {
            setCurrentText(e.target.value);
        }} 
    />
  );
});

export default SearchBar;