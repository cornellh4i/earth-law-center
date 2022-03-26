import React from 'react';
import './LandingCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const LandingCard = (props) => {
    return ( 
        <Card sx={{maxWidth: 345, m:5}}>
            <CardActionArea sx = {{bgcolor: 'text.disabled'}}>
            <CardMedia
            component="img"
            alt="template img"
            height="200"
            src = "https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx = {{fontWeight: 'bold'}}>
                {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx = {{fontSize: 18}} >
                {props.description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>

    );
  };

export default LandingCard;


