import React from 'react';
import './ResourceCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

/** Component for a landing card used by template law/letter cards
 *  @param {title} is the title on the card
 *  @param {text} is the text in the card
*/
const ResourceCard = (props) => {
  const { title, resource_type, link_to_resource, description } = props;
  return (
    <Card sx={{ maxWidth: "40%" }}>
      <CardActionArea>
        <CardMedia component='img' alt="first" height='200' image={link_to_resource} />
        <CardContent className='card-content'>
          <Box component={Stack} direction="column" justifyContent="center">
            <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ fontSize: 18 }} >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card >
  );
};

export default ResourceCard;