import React, {useState} from 'react';
import './LawsLettersDisplay.css';
import '../../components/CategorySideBar/CategorySideBar'; 
import Header from '../../components/Header/Header';
import CategorySideBar from '../../components/CategorySideBar/CategorySideBar';
import TemplateCard from '../../components/TemplateCard/TemplateCard'; 
import MultiSelectFilter from '../../components/MultiSelectFilter/MultiSelectFilter'

/** Component for Laws Page */
const LawsDisplay = () => {
  const [category, setCategory] = useState("");
  const [checked, setChecked] = useState("");

  return (
    <div>
      <Header title="Build Earth Laws" description="Customize and download model laws, resolutions, and other legal instruments that support a paradigm shift to better protect the planet. " hasSearch={true} searchBarPlaceholder="Search Law Templates"></Header>
      <div className="body-box">
        <div className="side-box">
          <CategorySideBar setCategoryParent={setCategory} categories = {["ALL CATEGORIES", "RIGHTS OF NATURE", "RIGHTS OF FUTURE GENERATIONS", "HUMAN ENVIRONMENTAL RIGHTS", 
  "ECOCIDE", "LEGAL GUARDIANSHIP", "ECOCENTRIC CORPORATE GOVERNANCE", "ECOCENTRIC LAND MODELS"]}/>
          <MultiSelectFilter setCheckedParent={setChecked} />
        </div>
        <div className="content-box">
          <h1 className="card-heading-title">{category}</h1>
          <p className="card-description">Description of category: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <div className="card-box">
            <TemplateCard className="law-card" currentFilter={checked} law="ordinance" jurisdiction="local" type="type" title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard className="law-card" currentFilter={checked} law="ordinance" jurisdiction="local" type="type" title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard className="law-card" currentFilter={checked} law="ordinance" jurisdiction="local" type="type" title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard className="law-card" currentFilter={checked} law="ordinance" jurisdiction="local" type="type" title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard className="law-card" currentFilter={checked} law="ordinance" jurisdiction="local" type="type" title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard className="law-card" currentFilter={checked} law="ordinance" jurisdiction="local" type="type" title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LawsDisplay;
