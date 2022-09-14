import React, {useState} from 'react';
import '../LawsDisplay/LawsLettersDisplay.css';
import '../../components/CategorySideBar/CategorySideBar'; 
import Header from '../../components/Header/Header';
import TemplateCard from '../../components/TemplateCard/TemplateCard'; 
import MultiSelectFilter from '../../components/MultiSelectFilter/MultiSelectFilter'
import testPic from './testpic.png'

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
          <div className="card-box">
          <TemplateCard letter={true} preview={testPic} className="law-card" currentFilter={checked} law="ordinance" jurisdiction="local" title="Nature Rights" summary="A letter encouraging lawmakers to recognize that ecosystems have inherent rights, just as humans do."/>
            <TemplateCard letter={true} preview={testPic} className="law-card" currentFilter={checked} law="ordinance" jurisdiction="regional" title="Ecocide" summary="A letter encouraging lawmakers to criminalize the severe and widespread or long-term damage to the environment."/>
            <TemplateCard letter={true} preview={testPic} className="law-card" currentFilter={checked} law="ordinance" jurisdiction="national" title="Rights of Future Generations" summary="A letter encouraging lawmakers to recognize that future generations have a right to inherit a thriving planet."/>
            <TemplateCard letter={true} preview={testPic} className="law-card" currentFilter={checked} law="ordinance" jurisdiction="international" title="Legal Guardianship Bodies" summary="A letter encouraging lawmakers to establish legal guardianship bodies to legally represent “voiceless” entities."/>
            <TemplateCard letter={true} preview={testPic} className="law-card" currentFilter={checked} law="ordinance" jurisdiction="local" title="Biocultural Rights" summary="A letter encouraging lawmakers to support the customary right of traditional stewards within a landscape."/>
            <TemplateCard letter={true} preview={testPic} className="law-card" currentFilter={checked} law="resolution" jurisdiction="local" title="Ecocentric Corporate Governance" summary="A letter encouraging lawmakers to give a voice to Nature or other voiceless entities in your company."/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LettersDisplay;
