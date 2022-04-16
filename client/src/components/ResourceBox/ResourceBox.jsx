import React from 'react';
import './ResourceBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

/** Component for a Resource card */
const ResourceBox = () => {
  return (
    <Card className='box'>
      <CardActionArea>
        <CardContent className='box-content'></CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResourceBox;