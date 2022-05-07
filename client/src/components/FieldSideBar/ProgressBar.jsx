import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

/** Progress bar component
 * Params are properties which need to be applied to the LinearProgress component
 */

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '80%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props}
        sx={{ borderRadius: 5, height: 8, [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#FFFFFF',
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#64926E',
        },
    }
    } />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary" ml={2}sx ={{fontWeight: 'bold', fontSize:18}}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel variant = 'determinate' value={props.value} />
    </Box>
  );
}
