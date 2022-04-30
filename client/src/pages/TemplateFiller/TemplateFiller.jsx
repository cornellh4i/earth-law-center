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

  // Temporary hardcoded data to pass as props to the Q&A component
  const questionsData = {
    'Name of Local Ecosystem': {
      id: 0,
      questions: [
        ['text input', 'What is the name of the local ecosystem?']
      ]
    },
    'City & State': {
      id: 1,
      questions: [
        ['states dropdown select', 'What state does this ordonnance apply to?'],
        ['text input', 'What city does this ordonnance apply to?']
      ]
    },
    'Number of Members in Guardianship Body': {
      id: 2,
      questions: [
        ['text input', 'How many members are in the Guardianship Body?']
      ]
    },
    'Enactment': {
      id: 3,
      questions: [
        ['text input', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
      ]
    }
  }

  // the current page clicked by the user, defaults to the first entry in questionsData
  const [clicked, setClicked] = useState(Object.keys(questionsData)[0])

  const fieldItem = Object.keys(questionsData).map(key =>
    <div>
      <div className='side-btn' onClick={() => handleClick(key)}>{key}</div>
    </div>
  )

  const handleClick = (field) => {
    setClicked(field);
    let length = Object.keys(questionsData).length;
    setProgress(Math.floor((questionsData[clicked].id / length) * 100))
  }

  return (
    <div>
      {/* Entries to field prop is temporary for testing */}
      < Box sx={{ display: 'flex' }
      }>
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
              questions={questionsData[clicked].questions}
            />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Box >
    </div >
  );
};

export default TemplateFiller;