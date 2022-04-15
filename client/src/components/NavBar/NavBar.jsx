import React from 'react';
import './NavBar.css';
import Button from '../Button/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


/** A Navigation Bar for the Website */
const NavBar = () => {
  return (
    <div className="navbar-container">
      <Grid container justifyContent="flex-end">
        <Link to="/laws"><Button text="LAWS" css="navbar-btn" /></Link>
        <Link to="/letters"><Button text="LETTERS" css="navbar-btn" /></Link>
        <Link to="/landing"><Button text="ABOUT" css="navbar-btn" /></Link>
      </Grid>
    </div>
  );
};

export default NavBar;