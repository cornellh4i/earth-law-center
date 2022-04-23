import React from 'react';
import './ResourceCard.css';
import Button from '../Button/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";
import './ResourceCard.css';

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);


const styles = {
  card_content:
  {
    p: '1'
    , '&:last-child': { pb: 2 }
  }
};


/** Component for a landing card used by template law/letter cards
 *  @param {title} is the title on the card
 *  @param {text} is the text in the card
*/
const ResourceCard = (props) => {
  const { title, resource_type, link_to_resource, description, url } = props;
  return (
    <Card className='card' elevation={0}>
      {/* <CardContent sx={styles.card_content}> */}
      <CardContent className='card-content'>
        <Box component={Stack} direction='column' justifyContent='center'>
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
                  <Typography variant='body2' className='text' >
                    {description}
                  </Typography>
                  <div className='button'>
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
                  <Typography variant='body2' className='text' >
                    {description}
                  </Typography>
                </Grid>
                <div className='button'>
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
                  <Typography variant='body2' className='text' >
                    {description}
                  </Typography>
                </Grid>

                <div className='button'>
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
        </Box>
      </CardContent>
    </Card >
  );
};

export default ResourceCard;