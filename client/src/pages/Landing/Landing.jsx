import React from 'react';
import './Landing.css';
import DropDown from '../../components/DropDown/DropDown';


/** Component for Landing Page */

const Landing = () => {
  const jurisdictions = [
    'National',
    'Regional/State',
    'Local',
    'International'
  ];
  const lawTypes = [
    "Ordinance (binding)",
    "Resolution (non-binding)"
  ];
  const lawPlaceHolder = "Select a type of law";
  const jurisPlaceHolder = "Select a jurisdiction";
  return (
    <div>
      <h1>Landing Page Here</h1>
      <DropDown options={jurisdictions} placeholder={jurisPlaceHolder}></DropDown>
      <DropDown options={lawTypes} placeholder={lawPlaceHolder}></DropDown>
    </div>
  );
};
export default Landing;
