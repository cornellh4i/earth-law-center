import React, {useImperativeHandle, useState, forwardRef} from 'react';
import TextField from '@mui/material/TextField';
import './SearchBar.css'
import Button from '../Button/Button.jsx'


/**
 * Component for a search bar to be used in the headers of the website
 * @param {currentText} is the current text of the search bar
 */

const SearchBar = forwardRef((props) => {
    const [currentText, setCurrentText] = useState("")
    let inputHandler=(e)=>{
        setCurrentText(e.target.value.toLowerCase())
    }

    return (
        <>
            <TextField 
                placeholder={props.placeholder} 
                className="search-bar"
                sx={{
                    width: "80%",
                    minWidth: 150,
                    backgroundColor: 'white',
                    borderRadius: '0.9375rem',
                }} 
                onChange={inputHandler} 
            />
            <Button css="search-btn" text="SEARCH" handleClick={()=>props.handleSearch(currentText)}/>
        </>
    );
});

export default SearchBar;