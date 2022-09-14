import { useState } from 'react';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';
import './TemplateFiller.css';

import { useLocation } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HelpBox from '../../components/HelpBox/HelpBox';

/** Component for the Template Filler Page
 * Params are passed through react-router-dom states rather than props
 * @param {docID} is the docID of the selected doc
*/

const TemplateFiller = () => {
  /** Retrieve state from react-router-dom  */
  const state = useLocation().state

  /** Temporary hardcoded data to pass as props to the Q&A component */
  const questionsData = {
    'Name of Local Ecosystem': {
      id: 0,
      questions: [['text input', 'What is the name of the local ecosystem?']],
    },
    'City & State': {
      id: 1,
      questions: [
        ['states dropdown select', 'What state does this ordonnance apply to?'],
        ['text input', 'What city does this ordonnance apply to?'],
      ],
    },
    'Number of Members in Guardianship Body': {
      id: 2,
      questions: [
        ['text input', 'How many members are in the Guardianship Body?'],
      ],
    },
    Enactment: {
      id: 3,
      questions: [
        [
          'text input',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        ],
      ],
    },
  };

  /** The current page clicked by the user, defaults to the first entry in questionsData */
  const [clicked, setClicked] = useState(Object.keys(questionsData)[0]);

  /** Temporary variables */
  let length = Object.keys(questionsData).length;
  let clickedId = questionsData[clicked].id;

  /** Value to render in the progress bar for the navigation sidebar */
  const [progress, setProgress] = useState(Math.floor((1 / length) * 100));

  /** Update the progress bar to the correct percentage value */
  const changeProgress = (newClickedId) => {
    setProgress(Math.floor(((newClickedId + 1) / length) * 100));
  };

  /** Handles user clicking a navigation button in the sidebar */
  const handleNavigationClick = (field) => {
    setClicked(field);
    changeProgress(questionsData[field].id);
  };

  /** Styling and functionality for sidebar navigation buttons */
  const fields = Object.keys(questionsData);
  const fieldItem = fields.map((field) => (
    <div
      className={
        questionsData[clicked].id === questionsData[field].id
          ? 'side-btn side-btn-active'
          : 'side-btn'
      }
      onClick={() => handleNavigationClick(field)}
    >
      {field}
    </div>
  ));

  /** Move user to the previous page */
  const backPage = () => {
    let newClickedId = Math.max(clickedId - 1, 0);
    changeProgress(newClickedId);
    setClicked(Object.keys(questionsData)[newClickedId]);
  };

  /** Advances user to the next page */
  const advancePage = () => {
    let newClickedId = Math.min(clickedId + 1, length - 1);
    changeProgress(newClickedId);
    setClicked(Object.keys(questionsData)[newClickedId]);
  };

  /** Handles user pressing the 'Back' button */
  const handleBack = (e) => {
    backPage();
  };

  /** Handles user pressing the 'Skip' button */
  const handleSkip = (e) => {
    advancePage();
  };

  /** Handles user pressing the 'Next' button */
  const handleSubmit = (e, inputs) => {
    advancePage();
    console.log(inputs);
  };

  /** Downloads a google doc when user presses the Download button */
  const handleDownload = (e) => {
    window.location.assign(`http://localhost:8081/api/docDownload/${state.docID}`);
  }

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <FieldSideBar
          title='EarthLegislator'
          fieldItem={fieldItem}
          progress={progress}
          handleDownload={handleDownload}
        />
        <Grid pt={5} container spacing={4}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <QuestionAnswer
              field={clicked}
              fieldId={questionsData[clicked].id}
              title={'Right of Nature Ordonnance Template'}
              questions={questionsData[clicked].questions}
              length={length}
              handleBack={handleBack}
              handleSkip={handleSkip}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid item xs={1} />
          <HelpBox
            title='Earth Law Center'
            description='Earth Law Center is one example of an organization that drafts Rights of Nature and other Earth-centered laws across the United States and world.'
          />
        </Grid>
      </Box>
    </div>
  );
};

export default TemplateFiller;
