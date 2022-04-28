import React from 'react';
import './LawsDisplay.css';
import '../../components/CategorySideBar/CategorySideBar'; 
import Header from '../../components/Header/Header';
import CategorySideBar from '../../components/CategorySideBar/CategorySideBar';
import TemplateCard from '../../components/TemplateCard/TemplateCard'; 
import MultiSelectFilter from '../../components/MultiSelectFilter/MultiSelectFilter'

/** Component for Laws Page */
const LawsDisplay = () => {
  return (
    <div>
      <Header title="Build Earth Laws" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." hasSearch={true} searchBarPlaceholder="Search Law Templates"></Header>
      <h1>LawsDisplay</h1>
      <CategorySideBar categories = {["ALL CATEGORIES", "RIGHTS OF NATURE", "RIGHTS OF FUTURE GENERATIONS", "HUMAN ENVIRONMENTAL RIGHTS", 
                                    "ECOCIDE", "LEGAL GUARDIANSHIP", "ECOCENTRIC CORPORATE GOVERNANCE", "ECOCENTRIC LAND MODELS"]}/>
      <div className="testBox">
         <MultiSelectFilter></MultiSelectFilter>
        <TemplateCard title="title 3" summary="test summary ahhahahahahahahahah"/>
        <TemplateCard title="title 2" summary="test summary numbah 2 ahhahahahahahahahah"/>
        <TemplateCard title="title 3" summary="test summary numbah 3 oh baby"/>
      </div>
    </div>
  );
};
export default LawsDisplay;
