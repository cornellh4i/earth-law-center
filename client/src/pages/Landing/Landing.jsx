import React from 'react';
import ResourceBox from '../../components/ResourceBox/ResourceBox';
import TemplateBox from '../../components/TemplateBoxes/TemplateBox';

import './Landing.css';

/** Component for Landing Page */

const Landing = () => {

  return (
    <div>
      {/*We have two template boxes for now*/}
      <TemplateBox 
        titleLaw = {"Law Templates"} 
        descriptionLaw = {"One sentence Description of what is on this webpage"}>
      </TemplateBox>

      <TemplateBox 
        titleLetter = {"Letter Templates"} 
        descriptionLetter = {"One sentence Description of what is on this webpage"} >
       </TemplateBox>

      {/*Three resource boxes I believe. We can probably useState to fix them later*/}
      <ResourceBox></ResourceBox>
      <ResourceBox></ResourceBox>
      <ResourceBox></ResourceBox>
    </div>
  );
};
export default Landing;
