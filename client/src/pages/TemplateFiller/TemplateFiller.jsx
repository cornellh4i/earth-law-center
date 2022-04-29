import React from 'react';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import React, { useState } from 'react';
import './TemplateFiller.css';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';
import Grid from '@mui/material/Grid';

/** Component for Template Filler Page */
const TemplateFiller = () => {
  // Value to render in the progress bar for the navigation sidebar
  const [progress, setProgress] = useState(30)

  return (
    <div>

      <h1>TemplateFiller</h1>
      <QuestionAnswer
        field={'City & State'}
        title={'Right of Nature Ordonnance Template'}
        questions={[
          ['states dropdown select', 'What state does this ordonnance apply to?'],
          ['text input', 'What city does this ordonnance apply to?'],
        ]}
      />

      {/* Entries to field prop is temporary for testing */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={2}>
          <FieldSideBar
            title='EarthLegislator'
            progress={progress}
            field={[
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
            ]} />
        </Grid>
      </Grid>

    </div>
  );
};
export default TemplateFiller;
