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

  const questionsData = {
    'Name of Local Ecosystem': [
      ['text input', 'What is the name of the local ecosystem?'],
    ],
    'City & State': [
      ['states dropdown select', 'What state does this ordonnance apply to?'],
      ['text input', 'What city does this ordonnance apply to?']
    ],
    'Number of Members in Guardianship Body': [
      ['text input', 'How many members are in the Guardianship Body?']
    ],
    'Enactment':[
      ['text input', 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    ]
  }

  const [clicked, setClicked] = useState(Object.keys(questionsData)[0])

  const fieldItem = Object.keys(questionsData).map(key =>
    <div>
      <div className='side-btn' onClick={() => handleClick(key)}>{key}</div>
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
              questions={questionsData[clicked]}
            />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Box>
    </div>
  );
};

export default TemplateFiller;