import React, { useState } from 'react';
import './LawsLettersDisplay.css';
import '../../components/CategorySideBar/CategorySideBar';
import Header from '../../components/Header/Header';
import CategorySideBar from '../../components/CategorySideBar/CategorySideBar';
import TemplateCard from '../../components/TemplateCard/TemplateCard';
import MultiSelectFilter from '../../components/MultiSelectFilter/MultiSelectFilter'

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

  return (
    <div>
      <Header title="Build Earth Laws" description="Customize and download model laws, resolutions, and other legal instruments that support a paradigm shift to better protect the planet. " hasSearch={true} searchBarPlaceholder="Search Law Templates"></Header>
      <div className="body-box">
        <div className="side-box">
          <CategorySideBar setCategoryParent={setCategory} categories={["ALL CATEGORIES", "RIGHTS OF NATURE", "RIGHTS OF FUTURE GENERATIONS", "HUMAN ENVIRONMENTAL RIGHTS",
            "ECOCIDE", "LEGAL GUARDIANSHIP", "ECOCENTRIC CORPORATE GOVERNANCE", "ECOCENTRIC LAND MODELS"]} />
          <MultiSelectFilter setCheckedParent={setChecked} />
        </div>
        <div className="content-box">
          <h1 className="card-heading-title">{category}</h1>
          {/* <p className="card-description">Description of category: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p> */}
          <div className="card-box">
            <TemplateCard
              className="law-card"
              currentFilter={checked}
              law="ordinance"
              jurisdiction="local"
              type="type"
              title="Ecosystem Rights"
              summary="A resolution or ordinance on the rights of a particular ecosystem-e.g., a forest-with a possible guardianship body to speak for it."
              docID="1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os"
            />
            <TemplateCard
              className="law-card"
              currentFilter={checked}
              law="ordinance"
              jurisdiction="regional"
              type="type"
              title="Local Ocean Rights"
              summary="A resolution or ordinance on the rights of marine ecosystems, including the right to 'health'."
              docID="1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os"
            />
            <TemplateCard
              className="law-card"
              currentFilter={checked}
              law="ordinance"
              jurisdiction="national"
              type="type"
              title="Local Rights of Rivers"
              summary="A resolution or ordinance on the rights of rivers and watersheds with a guardianship body to speak for the river."
              docID="1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os"
            />
            <TemplateCard
              className="law-card"
              currentFilter={checked}
              law="ordinance"
              jurisdiction="international"
              type="type"
              title="State Constitutional Amendment"
              summary="A Rights of Nature state constitutional amendment that can unlock the ability of local rights of nature efforts."
              docID="1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os"
            />
            <TemplateCard
              className="law-card"
              currentFilter={checked}
              law="ordinance"
              jurisdiction="local"
              type="type"
              title="National Constitutional Amendment"
              summary="A constitutional amendment establishing the Rights of Nature and other ecocentric legal principles."
              docID="1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os"
            />
            <TemplateCard
              className="law-card"
              currentFilter={checked}
              law="resolution"
              jurisdiction="local"
              type="type"
              title="Preamble on the Rights of Nature"
              summary="A generic preamble on the Rights of Nature to include in any legal instrument, with fully updated information."
              docID="1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LawsDisplay;
