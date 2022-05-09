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
 *  @param {doc_img} is the image of a document card
 *  @param {description} is the description in the card
 *  @param {url} is the url of the button
 *  @param {youtube} is the youtube sequence number
*/
const ResourceCard = (props) => {
  const { title, resource_type, doc_img, description, url, youtube, vid_img, doc_pdf } = props;
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
              <img className='resource-doc-preview' src = {props.doc_img}/>
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
                    window.open(doc_pdf, "_blank");
                  }} />
              </div>
            </Grid>
          </>
        }

        {/* Video card with youtube iframe and text */}
        {resource_type === 'Video' &&
          <>
            <Grid item xs={6}>
              {/* <iframe id="player" type="text/html"
                width="100%" 
                height="85rem"
                src={"http://www.youtube.com/embed/"+youtube+"?enablejsapi=1&origin=http://example.com"}
                // src={"http://www.youtube.com/embed/"+youtube}
                frameborder="0"></iframe> */}
            <img className='resource-vid-preview' src = {vid_img}/>

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
  doc_img: '../../properties/elc-home-mar2022.jpeg'
};

export default ResourceCard;