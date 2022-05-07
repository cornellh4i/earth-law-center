import React from 'react';
import './ResourceBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

/** Component for a Resource card */
const ResourceBox = (boxNum, title, description) => {
  return (
    <Card className={boxNum === "1" ? 'resource1' : boxNum === "2" ? 'resource2' : 'resource3'}>
      <CardActionArea>
        <CardContent className='box-content'></CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResourceBox;

