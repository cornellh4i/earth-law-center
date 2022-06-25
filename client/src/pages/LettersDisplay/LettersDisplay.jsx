import React, { useState } from 'react';
import '../LawsDisplay/LawsLettersDisplay.css';
import '../../components/CategorySideBar/CategorySideBar';
import Header from '../../components/Header/Header';
import MultiSelectFilter from '../../components/MultiSelectFilter/MultiSelectFilter'
import LetterData from '../../data/LetterData'
import TemplateList from '../../components/TemplateList/TemplateList.jsx'


/** Component for Letters Page */
const LettersDisplay = () => {
const [checked, setChecked] = useState({
  local: false,
  regional: false,
  national: false,
  international: false,
  ordinance: false,
  resolution: false,
});

  return (
    <div>
      <Header title="Build Earth Letters" description="Customize and download model laws, resolutions, and other legal instruments that support a paradigm shift to better protect the planet. " hasSearch={true} searchBarPlaceholder="Search Letter Templates"></Header>
      <div className="body-box">
        <div className="side-box">
        <MultiSelectFilter setCheckedParent={setChecked} />
        </div>
        <div className="content-box">
          <h1 className="card-heading-title">Letter Templates</h1>
          <p className="card-description">Let us help you send a lawmaker or other decision-maker an informed letter about an Earth law movement you care about–the Rights of Nature, human environmental rights, rights of future generations, and others. Our letters are regularly updated with the most relevant information to ensure they are relevant and powerful. Just fill in a bit of information and download your letter now! These work for any level of government.</p>
          <div className="template-box">
            <TemplateList data={LetterData} checked={checked} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LettersDisplay;
