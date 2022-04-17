import React from 'react';
import './TemplateFiller.css';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';

/** Component for Template Filler Page */

const TemplateFiller = () => {
  return (
    <div>
      {/* Entries to field prop is temporary for testing */}
      <FieldSideBar field = {['Name of Local Ecosystem(s)', 'Municipality', 'City & State', 
      'Activites Your Community Engages in', 'Specific Indegenous Peoples', 'Types of Impact'
      ]}/>
    </div>
  );
};
export default TemplateFiller;
