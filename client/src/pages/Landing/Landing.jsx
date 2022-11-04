import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ResourceBox from '../../components/ResourceBox/ResourceBox';
import LandingCard from '../../components/LandingCard/LandingCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Landing.css';
import { Link } from 'react-router-dom'
import text from '../../data/LandingText.js';
import Button from '../../components/Button/Button';
import ResourceData from "../../data/ResourceData";

/** Component for Landing Page */
const Landing = () => {
  return (
    <div>
      <Header title="EarthLegislator" description={text.HeaderDescription} hasSearch={false} />
      <div className="content">
        {/* We have two Landing boxes for now */}
        <Grid container spacing={4} pt={5}>
          <Grid item xs={12} md={5.5}>
            <Link to='/laws' style={{ textDecoration: 'none' }}>
              <LandingCard
                title={"Law Template"}
                text={text.LawsDescription}
                link={"/laws"}>
              </LandingCard>
            </Link>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={5.5}>
            <Link to='/letters' style={{ textDecoration: 'none' }}>
              <LandingCard
                title={"Letter Template"}
                text={text.LettersDescription}
                link={"/letters"}>
              </LandingCard>
            </Link>
          </Grid>
        </Grid>

        {/*Three resource boxes I believe. We can probably useState to fix them later*/}
        <Typography pt={10} pb={2} align='center' variant='h5' component='div' sx={{ fontWeight: 500, color: "#64926E" }}>Resources</Typography>
        <Grid container >
          <Grid item sm={12} md={3.6} pt={1}>
            <ResourceBox title={text.Resource1.title} text={text.Resource1.description} image="thumbnail1" link={text.Resource1.link}></ResourceBox>
          </Grid>
          <Grid item sm={12} md={0.6}></Grid>
          <Grid item sm={12} md={3.6} pt={1}>
            <ResourceBox title={text.Resource2.title} text={text.Resource2.description} image="thumbnail2" link={text.Resource2.link}></ResourceBox>
          </Grid>
          <Grid item sm={12} md={0.6}></Grid>
          <Grid item sm={12} md={3.6} pt={1}>
            <ResourceBox title={text.Resource3.title} text={text.Resource3.description} image="thumbnail3" link={text.Resource3.link}></ResourceBox>
          </Grid>
        </Grid>

        <Link to="/resources"><Button text="SEE MORE" css="seemore-bottom-btn" /></Link>
      </div>
      <Footer text="Powered by Earth Law Center" />
    </div>
  );
};
export default Landing;