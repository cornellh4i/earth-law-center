import React from 'react';
import './LandingCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

/** Component for a landing card used by template law/letter cards
 *  @param {title} is the title on the card
 *  @param {text} is the text in the card
*/
const LandingCard = (props) => {
  return (
    <Card className='card'>
      <CardActionArea>
        {/* <CardMedia component='img' alt='template img' height='200' src = {props.imgsrc}/> */}
        <CardContent className='card-content'>
          <Box component={Stack} direction="column" justifyContent="center">
            <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold' }}>
              {props.title}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ fontSize: 18 }} >
              {props.text}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card >
  );
};

export default LandingCard;