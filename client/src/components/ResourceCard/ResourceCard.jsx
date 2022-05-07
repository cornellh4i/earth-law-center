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
 *  @param {youtube} is the youtube sequence number
*/
const ResourceCard = (props) => {
  const { title, resource_type, link_to_resource, description, url, youtube } = props;
  return (
    <div className='resource-card'>
      <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold', fontFamily:'Nunito', color: '#64926E' }}>
        {title}
      </Typography>

      <Grid container spacing={1}>

        {/* Document card with portrait image and text */}
        {resource_type === 'Doc' &&
          <>
            <Grid item xs={5}>
              {/* <CardMedia component='img' alt='image' height='15%' image="doc1.jpg" /> */}
            </Grid>

            <Grid item xs={7}>
              <div className='resource-text' >
                {description}
              </div>
              <div className='resource-button'>
                <Button
                  text='VIEW'
                  css='green-median-btn'
                  handleClick={() => {
                    window.open(url, "_blank");
                  }} />
              </div>
            </Grid>
          </>
        }

        {/* Video card with youtube iframe and text */}
        {resource_type === 'Video' &&
          <>
            <Grid item xs={6}>
              <iframe id="player" type="text/html"
                width="100%" 
                height="85rem"
                src={"http://www.youtube.com/embed/"+youtube+"?enablejsapi=1&origin=http://example.com"}
                frameborder="0"></iframe>
            </Grid>
            <Grid item xs={6}>
              <div className='resource-text' >
                {description}
              </div>
            </Grid>
            <div className='resource-button'>
              <Button
                text='WATCH'
                css='green-median-btn'
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
              <div className='resource-text' >
                {description}
              </div>
            </Grid>

            <div className='resource-button'>
              <Button
                text='VIEW'
                css='green-median-btn'
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


ResourceCard.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, in sed percipitur eloquentia Lorem ipsum dolor sit amet, in sed',
  link_to_resource: '../../properties/elc-home-mar2022.jpeg'
};

export default ResourceCard;