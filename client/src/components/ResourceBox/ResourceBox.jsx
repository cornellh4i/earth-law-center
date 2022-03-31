import React from 'react';
import './ResourceBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

/** Component for a Resource card used by template law/letter cards
*/
const ResourceBox = (props) => {
  return (
      <Card sx={{ height: 400 }}>
        <CardActionArea>
          <CardContent sx={{ bgcolor: '#d7d7d7', height: 400 }}>
          </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default ResourceBox;