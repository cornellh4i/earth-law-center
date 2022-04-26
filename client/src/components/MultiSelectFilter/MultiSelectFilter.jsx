import * as React from 'react';
import './MultiSelectFilter.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MultiSelectFilter() {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
<Box className='box' component="span" sx={{ p: 2}}>
<h1 className='text'>Filter By Jurisdiction</h1>
<FormGroup>
<FormControlLabel control={<Checkbox
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>} label={<h1 className = 'labels'>Local</h1>}/>
</FormGroup>

<FormGroup>
<FormControlLabel control={<Checkbox
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>} label={<h1 className = 'labels'>Regional/State</h1>}/>
</FormGroup>

<FormGroup>
<FormControlLabel control={<Checkbox
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>} label={<h1 className = 'labels'>National</h1>} />
</FormGroup>

<FormGroup>
<FormControlLabel control={<Checkbox
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>} label={<h1 className = 'labels'>International</h1>} />
</FormGroup>
<br></br>

<h1 className='text'>Filter By Type of Law</h1>
<FormGroup>
<FormControlLabel control={<Checkbox
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>} label={<h1 className = 'labels'>Ordinance</h1>} />
</FormGroup>

<FormGroup>
<FormControlLabel className='labels' control={<Checkbox
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>} label={<h1 className = 'labels'>Resolution</h1>}/>
</FormGroup>
</Box>
  );
}


