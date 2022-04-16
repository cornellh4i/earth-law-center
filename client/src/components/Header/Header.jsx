import React from 'react';
import Typography from '@mui/material/Typography';
import './Header.css'

/**
 * Component for a general header to be used all over the webiste
 */
const Header = () => {
  return (
    <div className="banner">
      <div className="content">
        <Typography pt={5} pb={1} variant='h2' component='div' sx={{ fontWeight: 'bold' }}>
          Nature Templates &#38; Resources
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ fontSize: 18 }} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin blandit enim,
          ac hendrerit ligula. Sed ullamcorper iaculis eros. Nullam eleifend dignissim erat, ac dictum quam
          blandit sed. Aliquam ultricies eu magna et tempus. Ut facilisis varius ipsum, sed varius nisl congue non.
          Sed imperdiet lacus non auctor cursus. Nullam dolor tortor, varius a odio id, volutpat elementum justo.
        </Typography>
      </div>
    </div>
  );
};

export default Header;
