import React from 'react';
import './ResourceCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Item from  '@mui/material/Item';

/** Component for a landing card used by template law/letter cards
 *  @param {title} is the title on the card
 *  @param {text} is the text in the card
*/
const ResourceCard = (props) => {
  const { title, resource_type, link_to_resource, description } = props;
  return (
    <Card sx={{ maxWidth: "40%" }}>
      <CardActionArea>


        
        <CardContent className='card-content'>
          <Box component={Stack} direction="column" justifyContent="center">
            <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <CardMedia component='img' alt="first" height='200' image={link_to_resource} />
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant='body2' color='text.secondary' sx={{ fontSize: 18 }} >
                {description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card >
  );
};

export default ResourceCard;