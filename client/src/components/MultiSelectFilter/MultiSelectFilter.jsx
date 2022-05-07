import * as React from 'react';
import './MultiSelectFilter.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { process_params } from 'express/lib/router';

export default function MultiSelectFilter(props) {

  const [state, setState] = React.useState({
    local: false,
    regional: false,
    national: false,
    international: false,
    ordinance: false,
    resolution: false,
  });


  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    props.setCheckedParent({
      ...state,
      [event.target.name]: event.target.checked,
    });;
  };

  const { local, regional, national, international, ordinance, resolution } = state;
  return (
<Box className='box' component="span" sx={{ p: 2}}>
<h1 className='text'>FILTER BY JURISDICTION</h1>

<FormGroup>
<FormControlLabel control={<Checkbox
checked={local}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
name = 'local'
/>} label={<h1 className = 'labels'>Local</h1>}/>
</FormGroup>

<FormGroup>
<FormControlLabel control={<Checkbox
checked={regional}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
name = 'regional'
/>} label={<h1 className = 'labels'>Regional/State</h1>}/>
</FormGroup>

<FormGroup>
<FormControlLabel control={<Checkbox
checked={national}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
name = 'national'
/>} label={<h1 className = 'labels'>National</h1>} />
</FormGroup>

<FormGroup>
<FormControlLabel control={<Checkbox
checked={international}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
name = 'international'
/>} label={<h1 className = 'labels'>International</h1>} />
</FormGroup>
<br></br>

<h1 className='text'>FILTER BY TYPE OF LAW</h1>
<FormGroup>
<FormControlLabel control={<Checkbox
checked={ordinance}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
name = 'ordinance'
/>} label={<h1 className = 'labels'>Ordinance</h1>} />
</FormGroup>

<FormGroup>
<FormControlLabel className='labels' control={<Checkbox
checked={resolution}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
name = 'resolution'
/>} label={<h1 className = 'labels'>Resolution</h1>}/>
</FormGroup>
</Box>
  );
}