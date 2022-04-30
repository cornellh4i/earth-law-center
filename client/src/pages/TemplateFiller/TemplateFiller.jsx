import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import { useState } from 'react';
import './TemplateFiller.css';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


/** Component for Template Filler Page */
const TemplateFiller = () => {
  // Value to render in the progress bar for the navigation sidebar
  const [progress, setProgress] = useState(30)


  const allField = [
    'Name of Local Ecosystem',
    'City & State',
    'Number of Members in Guardianship Body',
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
      <Box sx={{ display: 'flex' }}>
        <FieldSideBar
          title='EarthLegislator'
          progress={progress}
          clicked={clicked}
          fieldItem={fieldItem}
        />
        <Grid pt={2} container spacing={4}>
          <Grid item xs={1} />
          <Grid item xs={10} >
            <QuestionAnswer
              field={clicked}
              title={'Right of Nature Ordonnance Template'}
              questions={[
                ['states dropdown select', 'What state does this ordonnance apply to?'],
                ['text input', 'What city does this ordonnance apply to?'],
              ]}
            />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Box>
    </div>
  );
};
export default TemplateFiller;
