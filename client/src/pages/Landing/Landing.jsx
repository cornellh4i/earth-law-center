import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ResourceBox from '../../components/ResourceBox/ResourceBox';
import LandingCard from '../../components/LandingCard/LandingCard';
import Header from '../../components/Header/Header'; 
import './Landing.css';
import { Link } from 'react-router-dom'

/** Component for Landing Page */
const Landing = () => {
  return (
    <div>
      <Header title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." hasSearch={true} searchBarPlaceholder="Search Lorem Ipsum"/>
      <div className="content">
        {/*We have two Landing boxes for now*/}
        <Grid container spacing={4} pt={5}>
          <Grid item xs={12} md={5.5}>
            <Link to='/laws' style = {{textDecoration: 'none'}}><LandingCard
              title={"Law Template"}
              text={"One sentence description of what is on this webpage"}>
            </LandingCard></Link>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={5.5}>
          <Link to='/letters' style = {{textDecoration: 'none'}}><LandingCard
              title={"Letter Template"}
              text={"One sentence description of what is on this webpage"}>
            </LandingCard></Link>
          </Grid>
        </Grid>

        {/*Three resource boxes I believe. We can probably useState to fix them later*/}
        <Typography pt={10} pb={2} align='center' variant='h5' component='div' sx={{ fontWeight: 'bold' }}>Resources</Typography>

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
