import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ResourceBox from '../../components/ResourceBox/ResourceBox';
import LandingCard from '../../components/LandingCard/LandingCard';
import Header from '../../components/Header/Header'; 
import './Landing.css';
import { Link } from 'react-router-dom'
import Text from '../../data/LandingText.js';

/** Component for Landing Page */
const Landing = () => {
  return (
    <div>
      <Header title="EarthLegislator" description={Text.HeaderDescription} hasSearch={false}/>
      <div className="content">
        {/* We have two Landing boxes for now */}
        <Grid container spacing={4} pt={5}>
          <Grid item xs={12} md={5.5}>
            {/* <Link to='/laws' style = {{textDecoration: 'none'}}> */}
              <LandingCard
                title={"Law Template"}
                text={Text.LawsDescription}>
                link = {'laws'}
              </LandingCard>
            {/* </Link> */}
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={5.5}>
          <Link to='/letters' style = {{textDecoration: 'none'}}>
            <LandingCard
              title={"Letter Template"}
              text={Text.LettersDescription}>
            </LandingCard>
          </Link>
          </Grid>
        </Grid>

        {/*Three resource boxes I believe. We can probably useState to fix them later*/}
        <Typography pt={10} pb={2} align='center' variant='h5' component='div' sx={{ fontWeight: 'bolder',fontFamily: 'Nunito' }}>Resources</Typography>

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
