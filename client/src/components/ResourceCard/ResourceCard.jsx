import React from 'react';
import './ResourceCard.css';
import Button from '../Button/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import './ResourceCard.css';

/** Component for a landing card used by template law/letter cards
 *  @param {title} is the title on the card
 *  @param {text} is the text in the card
 *  @param {link_to_resource} is the link_to_resource in the card
 *  @param {description} is the description in the card
 *  @param {url} is the url of the button
*/
const ResourceCard = (props) => {
  const { title, resource_type, link_to_resource, description, url } = props;
  return (
    <div className='resource-card'>
      <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>

      <Grid container spacing={1}>

        {/* Document card with portrait image and text */}
        {resource_type === 'Doc' &&
          <>
            <Grid item xs={5}>
              <CardMedia component='img' alt='image' height='15%' image={link_to_resource} />
            </Grid>

            <Grid item xs={7}>
              <Typography variant='body2' className='resource-text' >
                {description}
              </Typography>
              <div className='resource-button'>
                <Button
                  text='VIEW'
                  css='grey-median-btn'
                  handleClick={() => {
                    window.open(url, "_blank");
                  }} />
              </div>
            </Grid>
          </>
        }

        {/* Video card with landscape image and text */}
        {resource_type === 'Video' &&
          <>
            <Grid item xs={6}>
              <CardMedia component='img' alt='first' height='20%' image={link_to_resource} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body2' className='resource-text' >
                {description}
              </Typography>
            </Grid>
            <div className='resource-button'>
              <Button
                text='VIEW'
                css='grey-median-btn'
                handleClick={() => {
                  window.open(url, "_blank");
                }} />
            </div>
          </>
        }

        {/* Website card with text */}
        {resource_type === 'Website' &&
          <>
            <Grid item xs={12}>
              <Typography variant='body2' className='resource-text' >
                {description}
              </Typography>
            </Grid>

            <div className='resource-button'>
              <Button
                text='VIEW'
                css='grey-median-btn'
                handleClick={() => {
                  window.open(url, "_blank");
                }} />
            </div>
          </>
        }
      </Grid>
    </div>
  );
};

export default ResourceCard;