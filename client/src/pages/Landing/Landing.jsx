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
      <Header title="EarthLegislator" description="Earth Legislator is a web portal with ecocentric 
                                                  (or “Earth-centered”) legal models that legislators, 
                                                  activists, and others can easily customize and 
                                                  download—much like the popular websites “Rocket Lawyer”
                                                  or “LegalZoom” but for the planet. It also features 
                                                  customizable letter templates, toolkits, and other 
                                                  resources, making it easier for anyone to help ecocentric 
                                                  legal movements flourish across the globe. These legal 
                                                  movements aim to address shortcomings of the current legal 
                                                  system, which legalizes the destruction of nature, so that 
                                                  we achieve a future in which humans and Nature flourish 
                                                  together." 
                                                  hasSearch={true} searchBarPlaceholder="Search Lorem Ipsum"/>
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
