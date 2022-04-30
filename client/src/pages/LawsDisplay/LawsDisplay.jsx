import React, {useRef, useState} from 'react';
import './LawsDisplay.css';
import '../../components/CategorySideBar/CategorySideBar'; 
import Header from '../../components/Header/Header';
import CategorySideBar from '../../components/CategorySideBar/CategorySideBar';
import TemplateCard from '../../components/TemplateCard/TemplateCard'; 
import MultiSelectFilter from '../../components/MultiSelectFilter/MultiSelectFilter'

/** Component for Laws Page */
const LawsDisplay = () => {
  const select_filter = useRef();
  const category_bar = useRef();
  const [category, setCategory] = useState("");

  return (
    <div>
      <Header title="Build Earth Laws" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." hasSearch={true} searchBarPlaceholder="Search Law Templates"></Header>
      <div className="body-box">
        <div className="side-box">
          <CategorySideBar setCategoryParent={setCategory} ref={category_bar} categories = {["ALL CATEGORIES", "RIGHTS OF NATURE", "RIGHTS OF FUTURE GENERATIONS", "HUMAN ENVIRONMENTAL RIGHTS", 
  "ECOCIDE", "LEGAL GUARDIANSHIP", "ECOCENTRIC CORPORATE GOVERNANCE", "ECOCENTRIC LAND MODELS"]}/>
          <MultiSelectFilter ref={select_filter}/>
        </div>
        <div className="content-box">
          <h1 className="card-title">{category}</h1>
          <p className="card-description">Description of category: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <div className="card-box">
            <TemplateCard title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <TemplateCard title="Title" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LawsDisplay;
