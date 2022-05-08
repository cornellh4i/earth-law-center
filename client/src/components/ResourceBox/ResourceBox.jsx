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
      <div className={props.image}>
        <div className='box-title'>{props.title}</div>
        <div className='box-description'>{props.text}</div>
      </div>
  );
};

export default ResourceBox;
