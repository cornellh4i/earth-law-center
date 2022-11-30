import React from 'react'
import './FieldSideBar.css';
import Button from '../Button/Button';
import Typography from '@mui/material/Typography';
import LinearProgressWithLabel from './ProgressBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import { Link as RouteLink, useNavigate } from 'react-router-dom';

/** Component for a Field Side Bar
 * @param {title} is the title to display in the sidebar
 * @param {fieldItem} is the component to display in the sidebar
 * @param {progress} is an int where 0 < progress < 100, representing user progress
 * @param {handleDownload} is a function that handles the Download button functionality
 * @param {templateTitle} is the title of the template that will be shown in the preview
*/

const FieldSideBar = (props) => {
  let navigate = useNavigate();
  let path = '/preview';

  return (
    <Drawer
      className='sidebar'
      variant='permanent'
      anchor='left'
    >
      <div className='sidebar-content'>
        {/* Header title */}
        <Typography
          pt={3} pb={3} ml={2}
          variant='h5'
          component='div'
          sx={{ fontWeight: 'bold', color: '#64926E', fontFamily: 'Nunito', fontSize: 36 }}
        >
          {props.title}
        </Typography>

        {/* Progress bar */}
        <Box pb={3} ml={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <LinearProgressWithLabel className='progress-bar' value={props.progress} color='inherit' />
        </Box>

        <div className='bar-div'>
          {props.fieldItem}
        </div>
        <Box pt={2}>
          <Button
            text='PREVIEW'
            handleClick={() => navigate(path, { state: { templateTitle: props.templateTitle } })}
            css={props.fieldItem == null ? 'hidden' : 'template-preview-btn'}
          />
          <Button
            text='DOWNLOAD'
            handleClick={() => props.handleDownload()}
            css={props.fieldItem == null ? 'hidden' : 'template-download-btn'}
          />
        </Box>
        <Box pt={2} className='return'>
          <Link href='/laws' color='text.secondary'>Return to Templates</Link>
        </Box>
      </div>
    </Drawer>
  );
};

export default FieldSideBar;