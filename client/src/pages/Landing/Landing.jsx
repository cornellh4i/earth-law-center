import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ResourceBox from '../../components/ResourceBox/ResourceBox';
import LandingCard from '../../components/LandingCard/LandingCard';
import Header from '../../components/Header/Header'; 
import './Landing.css';
import { Link } from 'react-router-dom'
import HeaderDescription from '../../data/LandingText.js';
import Button from '../../components/Button/Button';

/** Component for Landing Page */
const Landing = () => {
  return (
    <div>
      <Header title="EarthLegislator" description={HeaderDescription} hasSearch={false}/>
      <div className="content">
        {/* We have two Landing boxes for now */}
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
        <Typography pt={10} pb={2} align='center' variant='h5' component='div' sx={{ fontWeight: 500, color: "#64926E" }}>Resources</Typography>

        <Grid container >
          <Grid item sm={12} md={3.6} pt={1}>
            <ResourceBox title={"Video Title Teplate"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}></ResourceBox>
          </Grid>
          <Grid item sm={12} md={0.6}></Grid>
          <Grid item sm={12} md={3.6} pt={1}>
            <ResourceBox title={"Video Title Teplate"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}></ResourceBox>
          </Grid>
          <Grid item sm={12} md={0.6}></Grid>
          <Grid item sm={12} md={3.6} pt={1}>
            <ResourceBox title={"Video Title Teplate"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}></ResourceBox>
          </Grid>
        </Grid>

        <Button text="SEE MORE" css="seemore-bottom-btn" />
      </div>
    </div>
  );
};
export default Landing;
