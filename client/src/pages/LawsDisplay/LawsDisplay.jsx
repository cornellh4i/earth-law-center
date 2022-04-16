import React from 'react';
import './LawsDisplay.css';
import '../../components/CategorySideBar/CategorySideBar'; 
import CategorySideBar from '../../components/CategorySideBar/CategorySideBar';
import TemplateCard from '../../components/TemplateCard/TemplateCard'; 
import MultiSelectFilter from '../../components/MultiSelectFilter/MultiSelectFilter'

/** Component for Laws Page */
const LawsDisplay = () => {
  return (
    <div>
      <h1>LawsDisplay</h1>
      <CategorySideBar/>
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
