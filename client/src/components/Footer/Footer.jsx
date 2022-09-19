import React from "react";
import Typography from '@mui/material/Typography';
import './Footer.css'

/**
 * Component for the footer to be used all over the webiste
 * @param {text} is the text at the footer of the page
 */
const Footer = (props) => {
  return (
    <div className="footBanner">
      <div className="footContent">
        <Typography sx={{ fontSize: 20, fontWeight: 'bolder', fontFamily: 'Nunito', color: '#000000' }}>
          {props.text}
        </Typography>
      </div>
    </div >
  );
};

export default Footer;