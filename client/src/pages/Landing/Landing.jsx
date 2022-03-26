import React from 'react';
import ResourceBox from '../../components/ResourceBox/ResourceBox';
import LandingCard from '../../components/LandingCard/LandingCard';

import './Landing.css';

/** Component for Landing Page */

const Landing = () => {

  return (
    <div>
      {/*We have two Landing boxes for now*/}
      <div className='box'>
        <LandingCard title = {"Law Template"} description= {"One sentence description of what is on this webpage"}></LandingCard>
        <LandingCard title = {"Letter Template"} description = {"One sentence description of what is on this webpage"}></LandingCard>
      </div>

      {/*Three resource boxes I believe. We can probably useState to fix them later*/}
      {/* <ResourceBox></ResourceBox>
      <ResourceBox></ResourceBox>
      <ResourceBox></ResourceBox> */}
    </div>
  );
};
export default Landing;
