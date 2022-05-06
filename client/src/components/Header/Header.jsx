import React, {useState, useRef} from 'react';
import Typography from '@mui/material/Typography';
import './Header.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Button from '../Button/Button.jsx'
import NavBar from '../NavBar/NavBar';

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
  const [search, setSearch] = useState("");
  const search_bar = useRef();

  const getSearchTerm = () => {
    const searchState = search_bar.current.getCurrentText();
    return searchState;
  }

  if(props.hasSearch){
    return (
      <div className="banner">
        {/* Assuming that we will only ever have a NavBar when there is a header, 
            we keep the NavBar in this component */}
        <NavBar/>
        <div className="content">
          <Typography pt={5} pb={1} variant='h2' component='div' sx={{ fontWeight: 'bolder', fontFamily: 'Nunito', color: '#64926E'}}>
            {props.title}
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ fontSize: 18, fontFamily: 'Nunito', marginTop: 4, marginRight: 20}} >
            {props.description}
          </Typography>
          <div className="search-bar-container">
            <SearchBar placeholder={props.searchBarPlaceholder} ref={search_bar}/>
            <Button css="search-btn" text="SEARCH" handleClick={ 
              (e) => {
                setSearch(getSearchTerm());
              }
            }/>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="banner">
      <NavBar/>
      <div className="content">
        <Typography pt={5} pb={1} variant='h2' component='div' sx={{ fontWeight: 'bolder', fontFamily: 'Nunito', color: '#64926E'}}>
          {props.title}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ fontSize: 18, fontFamily: 'Nunito', marginTop: 6, marginRight: 46 }} >
          {props.description}
        </Typography>
      </div>
    </div>
  );
};

export default Header;
