import React from 'react';
import './LawsDisplay.css';
import '../../components/CategorySideBar/CategorySideBar'; 
import CategorySideBar from '../../components/CategorySideBar/CategorySideBar';

/** Component for Laws Page */
const LawsDisplay = () => {
  return (
    <div>
      <h1>LawsDisplay</h1>
      <CategorySideBar/>
    </div>
  );
};
export default LawsDisplay;
