import React from 'react';
import './ResourceBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

/** Component for a Resource card */
const ResourceBox = (props) => {
  return (
    <Card className='card'>
      <CardActionArea>
        <CardContent className='box-content'>
          <Box component={Stack} direction="column" >
            <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 500, fontSize: 30, }} className="resource-title">
              {props.title}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ fontSize: 15, fontWeight: 400 }} className="resource-description">
              {props.text}
            </Typography>
            <Link to="/resources"><Button text="WATCH" css="watch-btn-landing-pg" /></Link>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResourceBox;
