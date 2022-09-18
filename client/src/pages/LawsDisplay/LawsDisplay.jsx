import React, { useState } from 'react';
import './LawsLettersDisplay.css';
import '../../components/CategorySideBar/CategorySideBar';
import Header from '../../components/Header/Header';
import CategorySideBar from '../../components/CategorySideBar/CategorySideBar';
import TemplateCard from '../../components/TemplateCard/TemplateCard';
import MultiSelectFilter from '../../components/MultiSelectFilter/MultiSelectFilter'
import LawData from '../../data/LawData'
import TemplateList from '../../components/TemplateList/TemplateList.jsx'
import Grid from '@mui/material/Grid';

/** Component for Laws Page */
const LawsDisplay = () => {
  const [category, setCategory] = useState("");
  const [checked, setChecked] = useState({
    local: false,
    regional: false,
    national: false,
    international: false,
    ordinance: false,
    resolution: false,
  });
  const [data, setData] = useState(LawData)
  const searchData = (input) => {
    setData(LawData.filter((item) => {
      if (input === '') {
        return true
      }
      else {
        return item.title.toLowerCase().includes(input) || item.summary.toLowerCase().includes(input)
      }
    }))
  }

  return (
    <div>
      <Header title="Build Earth Laws" description="Customize and download model laws, resolutions, and other legal instruments that support a paradigm shift to better protect the planet. " hasSearch={true} searchBarPlaceholder="Search Law Templates" handleSearch={searchData}></Header>
      <div className="body-box">
        <div className="side-box">
          <CategorySideBar setCategoryParent={setCategory} categories={["ALL CATEGORIES", "RIGHTS OF NATURE", "RIGHTS OF FUTURE GENERATIONS", "HUMAN ENVIRONMENTAL RIGHTS",
            "ECOCIDE", "LEGAL GUARDIANSHIP", "ECOCENTRIC CORPORATE GOVERNANCE", "ECOCENTRIC LAND MODELS"]} />
          <MultiSelectFilter setCheckedParent={setChecked} />
        </div>
        <div className="content-box">
          <h1 className="card-heading-title">{category}</h1>
          <p className="card-description">Description of category: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <Grid container columns={14} item xs={8}>
            <TemplateList data={data} checked={checked} />
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default LawsDisplay;
