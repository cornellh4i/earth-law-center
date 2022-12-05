import React, { useState } from 'react';
import '../LawsDisplay/LawsLettersDisplay.css';
import '../../components/CategorySideBar/CategorySideBar';
import './LettersDisplay.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MultiSelectFilter from '../../components/MultiSelectFilter/MultiSelectFilter'
import Masonry from '@mui/lab/Masonry';
import LetterData from '../../data/LetterData'
import TemplateCard from "../../components/TemplateCard/TemplateCard.jsx"


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
  const [data, setData] = useState(LetterData)
  const searchData = (input) => {
    setData(LetterData.filter((item) => {
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
      <Header title="Build Earth Letters" description="Customize and download model laws, resolutions, and other legal instruments that support a paradigm shift to better protect the planet. " hasSearch={true} searchBarPlaceholder="Search Letter Templates" handleSearch={searchData}></Header>
      <div className="letters-body-box">
        <div className="letter-content-box">
          <h1 className="card-heading-title">Letter Templates</h1>
          <p className="card-description">Let us help you send a lawmaker or other decision-maker an informed letter about an Earth law movement you care about–the Rights of Nature, human environmental rights, rights of future generations, and others. Our letters are regularly updated with the most relevant information to ensure they are relevant and powerful. Just fill in a bit of information and download your letter now! These work for any level of government.</p>
          <div className="letter-template-box">
            <Masonry columns={3} spacing={1}>
            {
                data.map((item) => (
                <TemplateCard
                  key={item.id}
                  className='template-card'
                  title={item.title}
                  summary={item.summary}
                  letter={item.letter}
                  preview={item.preview}
                  law={item.law}
                  jurisdiction={item.jurisdiction}
                  currentFilter={checked}
                  docID={item.docID}
                  pdf={item.pdf}
                />
              ))}
            </Masonry>
          </div>
        </div>
      </div>
      <Footer text="Powered by Earth Law Center" />
    </div>
  );
};
export default LettersDisplay;
