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
        <LandingCard 
        title = {"Law Template"} 
        description= {"One sentence description of what is on this webpage"}
        imgsrc = {"https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}></LandingCard>
        <LandingCard 
        title = {"Letter Template"} 
        description = {"One sentence description of what is on this webpage"}
        imgsrc = {"https://media.istockphoto.com/photos/definition-legislation-picture-id182171560?s=612x612"}></LandingCard>
      </div>

      {/*Three resource boxes I believe. We can probably useState to fix them later*/}
      {/* <ResourceBox></ResourceBox>
      <ResourceBox></ResourceBox>
      <ResourceBox></ResourceBox> */}
    </div>
  );
};
export default Landing;
