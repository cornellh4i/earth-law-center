import React from 'react';
import './LandingCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'; 

/** Component for a landing card used by template law/letter cards
 * @param {title} is the title on the card
 * @param {text} is the text in the card
 * @param {link} is the link that the card points to, e.g. /laws or /letters
*/
const LandingCard = (props) => {
  return (
    <Card className='card'>
      <CardActionArea>
        {/* <CardMedia component='img' alt='template img' height='200' src = {props.imgsrc}/> */}
        <CardContent className='card-content'>
          <Box component={Stack} direction="column" justifyContent="center">
            <Typography gutterBottom variant='h5' component='div' sx={{ fontSize: 28, fontWeight: '900', fontFamily: 'Nunito', color: '#64926E'}}>
              {props.title}
            </Typography>
           
            <Typography variant='body2' sx={{ fontSize: 18, marginTop:'10', fontFamily: 'Nunito'}} >
              {props.text}
            </Typography>
            <Link to={props.link}><Button css="seemore-btn" text = "SEE MORE" /></Link> 

          </Box>
        </CardContent>
      </CardActionArea>
    </Card >
  );
};

export default LandingCard;