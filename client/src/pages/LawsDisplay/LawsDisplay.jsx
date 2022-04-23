import React from 'react';
import './LawsDisplay.css';
import '../../components/CategorySideBar/CategorySideBar'; 
import CategorySideBar from '../../components/CategorySideBar/CategorySideBar';
import TemplateCard from '../../components/TemplateCard/TemplateCard'; 

/** Component for Laws Page */
const LawsDisplay = () => {
  return (
    <div>
      <h1>LawsDisplay</h1>
      <CategorySideBar categories = {["ALL CATEGORIES", "RIGHTS OF NATURE", "RIGHTS OF FUTURE GENERATIONS", "HUMAN ENVIRONMENTAL RIGHTS", 
                                    "ECOCIDE", "LEGAL GUARDIANSHIP", "ECOCENTRIC CORPORATE GOVERNANCE", "ECOCENTRIC LAND MODELS"]}/>
      <div className="testBox">
        <TemplateCard title="title 3" summary="test summary 1"/>
        <TemplateCard title="title 2" summary="test summary number 2 "/>
        <TemplateCard title="title 3" summary="test summary number 3 "/>
      </div>
    </div>
  );
};
export default LawsDisplay;
