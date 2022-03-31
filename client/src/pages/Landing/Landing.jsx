import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ResourceBox from '../../components/ResourceBox/ResourceBox';
import LandingCard from '../../components/LandingCard/LandingCard';

import './Landing.css';

/** Component for Landing Page */

const Landing = () => {

  return (
    <div>
      <div className="banner">
        <div className="content">
          <Box height='80px'></Box>
          <Typography variant='h2' component='div' sx={{ fontWeight: 'bold' }}>
            Nature Templates &#38; Resources
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ fontSize: 18 }} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin blandit enim,
            ac hendrerit ligula. Sed ullamcorper iaculis eros. Nullam eleifend dignissim erat, ac dictum quam
            blandit sed. Aliquam ultricies eu magna et tempus. Ut facilisis varius ipsum, sed varius nisl congue non.
            Sed imperdiet lacus non auctor cursus. Nullam dolor tortor, varius a odio id, volutpat elementum justo.
          </Typography>
        </div>
      </div>
      <Box height='80px'></Box>
      <div className="content">
        {/*We have two Landing boxes for now*/}
        <Grid container spacing={4}>
          <Grid item xs={12} md={5.5}>
            <LandingCard
              title={"Law Template"}
              text={"One sentence description of what is on this webpage"}>
            </LandingCard>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={5.5}>
            <LandingCard
              title={"Letter Template"}
              text={"One sentence description of what is on this webpage"}>
            </LandingCard>
          </Grid>
        </Grid>

        {/*Three resource boxes I believe. We can probably useState to fix them later*/}
        <Typography mt={10} mb={2} align='center' variant='h5' component='div' sx={{ fontWeight: 'bold' }}>Resources</Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ResourceBox></ResourceBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <ResourceBox></ResourceBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <ResourceBox></ResourceBox>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Landing;
