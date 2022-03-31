import React from 'react';
import './LandingCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

/** Component for a landing card used by template law/letter cards
 *  @param title is the title on the card
 *  @param text is the text in the card
*/
const LandingCard = (props) => {
  return (
      <Card sx={{ height: 300 }}>
        <CardActionArea>
          {/* <CardMedia component='img' alt='template img' height='200' src = {props.imgsrc}/> */}
          <CardContent sx={{ bgcolor: '#d7d7d7', height: 300 }}>
            <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold' }}>
              {props.title}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ fontSize: 18 }} >
              {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default LandingCard;