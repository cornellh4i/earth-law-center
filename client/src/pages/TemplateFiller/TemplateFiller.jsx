import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import React, { useState } from 'react';
import './TemplateFiller.css';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';
import Grid from '@mui/material/Grid';


/** Component for Template Filler Page */
const TemplateFiller = () => {
  // Value to render in the progress bar for the navigation sidebar
  const [progress, setProgress] = useState(30)
  

  const allField = [
    'Name of Local Ecosystem(s)',
    'Municipality',
    'City & State',
    'Activites Your Community Engages in',
    'Specific Indegenous Peoples',
    'Types of Impact',
    'Types of Infrastructure Impacts',
    'Number of Members in Guardianship Body',
    'City\'s Environmental Advisory Board or Other Appropriate Body',
    'Recommended Categories of Guardians',
    'Guardian Terms & Vacancies',
    'Annual City Report & Hearing',
    'Enactment'
  ]

  const [clicked, setClicked] = useState(allField[0])

  const fieldItem = allField.map((field) =>
  <div>
    <div className='side-btn' onClick={() => handleClick(field)}>{field}</div>
  </div>
  )

  const handleClick = (field) => {
    setClicked(field);
  }

  return (
    <div>
      {/* Entries to field prop is temporary for testing */}
      <Grid container spacing={4}>
        <Grid item xs={6} md={4} sx={{maxWidth:1/4}}>
          <FieldSideBar
            title='EarthLegislator'
            progress={progress}
            clicked ={clicked}
            fieldItem={fieldItem} />
        </Grid>
        <Grid item xs={6} md={4} >
          <QuestionAnswer
              field={clicked}
              title={'Right of Nature Ordonnance Template'}
              questions={[
                ['states dropdown select', 'What state does this ordonnance apply to?'],
                ['text input', 'What city does this ordonnance apply to?'],
              ]}
            />  

        </Grid>
      </Grid>

    </div>
  );
};
export default TemplateFiller;
