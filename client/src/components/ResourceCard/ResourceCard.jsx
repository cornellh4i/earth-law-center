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

const styles = {
  card: {
    maxWidth: '40%',
    maxHeight: '100%',
    border: 'solid black 0.05rem',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    margin: '2%',
    padding: '0% 0% 0% 0.5%'
  },
  button: {
    display: 'flex',
    justifyContent: 'right',
    // backgroundColor: '#B4E197',
    width: '100%',
    margin: '5% 0% 0%'
  },
  text: {
    fontSize: 13,
    color: "#000"
  }
};


/** Component for a landing card used by template law/letter cards
 *  @param {title} is the title on the card
 *  @param {text} is the text in the card
*/
const ResourceCard = (props) => {
  const { title, resource_type, link_to_resource, description } = props;
  return (
    <Card sx={styles.card} elevation={0}>
      <CardContent>
        <Box component={Stack} direction='column' justifyContent='center'>
          <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>

          <Grid container spacing={1}>
            {resource_type === 'Doc' &&
              <>
                <Grid item xs={5}>
                  <CardMedia component='img' alt='first' height='15%' image={link_to_resource} />
                </Grid>

                <Grid item xs={7}>
                  <Typography variant='body2' color='text.secondary' sx={styles.text} >
                    {description}
                  </Typography>
                  <div style={styles.button}>
                    <Button
                      text='VIEW'
                      css='grey-median-btn' />
                  </div>

                </Grid>
              </>
            }
            {resource_type === 'Video' &&
              <>
                <Grid item xs={6}>
                  <CardMedia component='img' alt='first' height='20%' image={link_to_resource} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body2' color='text.secondary' sx={styles.text} >
                    {description}
                  </Typography>
                </Grid>
                <div style={styles.button}>
                  <Button
                    text='VIEW'
                    css='grey-median-btn' />
                </div>
              </>

            }

            {resource_type === 'Website' &&
              <>
                <Grid item xs={12}>
                  <Typography variant='body2' color='text.secondary' sx={styles.text} >
                    {description}
                  </Typography>
                </Grid>

                <div style={styles.button}>
                  <Button
                    text='VIEW'
                    css='grey-median-btn' />
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