import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';
import './TemplateFiller.css';

import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HelpBox from '../../components/HelpBox/HelpBox';
import { useLocation } from "react-router-dom";

/** Component for Template Filler Page */
const TemplateFiller = () => {
  /** Data from the state passed by TemplateCard; contains the following data:
   * @param docID is the docID of the google doc
  */
  const data = useLocation().state

  /** Temporary hardcoded data to pass as props to the Q&A component */
  const rawData = [
    {
      "field": "City",
      "question": "What city does this law apply to?",
      "input_type": "short answer",
      "description": "asdsadsa"
    },
    {
      "field": "State",
      "question": "What state does this law apply to?",
      "input_type": "states dropdown"
    },
    {
      "field": "Municipality",
      "question": "What municipality does this law apply to?",
      "input_type": "short answer"
    },
    {
      "field": "Activities Your Community Engages In",
      "question": "What are some activities that nature enables your community to participate in?",
      "input_type": "short answer"
    },
    {
      "field": "Specific Indigenous Peoples",
      "question": "What is the name of the indigenous peoples who lived before your city was founded?",
      "input_type": "short answer"
    },
    {
      "field": "Specific Types of Impacts",
      "question": "What are some matters, actions, or decisions that may result in harm for the local ecosystem?",
      "input_type": "short answer"
    },
    {
      "field": "Specific Types of Infrastructure Impacts",
      "question": "What are some specific infrastructure developments that would harm your local ecosystem?",
      "input_type": "short answer"
    },
    {
      "field": "Number of Members",
      "question": "How many members should the Guardianship Body consist of?",
      "input_type": "short answer"
    },
    {
      "field": "Number of Guardians",
      "question": "What is the number of guardians?",
      "input_type": "short answer"
    }
  ]
  const questionsData = rawData

  /** Temporary hardcoded data to pass as props to the Q&A component */
  // const questionsData = {
  //   'Name of Local Ecosystem': {
  //     id: 0,
  //     questions: [['text input', 'What is the name of the local ecosystem?']],
  //   },
  //   'City & State': {
  //     id: 1,
  //     questions: [
  //       ['states dropdown select', 'What state does this ordonnance apply to?'],
  //       ['text input', 'What city does this ordonnance apply to?'],
  //     ],
  //   },
  //   'Number of Members in Guardianship Body': {
  //     id: 2,
  //     questions: [
  //       ['text input', 'How many members are in the Guardianship Body?'],
  //     ],
  //   },
  //   Enactment: {
  //     id: 3,
  //     questions: [
  //       [
  //         'text input',
  //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //       ],
  //     ],
  //   },
  // };

  /** The current page clicked by the user, defaults to the first entry in questionsData */
  const [clickedId, setClickedId] = useState(0);

  /** Temporary variables */
  let length = questionsData.length;

  /** Value to render in the progress bar for the navigation sidebar */
  const [progress, setProgress] = useState(Math.floor((1 / length) * 100));

  /** Update the progress bar to the correct percentage value */
  const changeProgress = (newClickedId) => {
    setProgress(Math.floor(((newClickedId + 1) / length) * 100));
  };

  /** Handles user clicking a navigation button in the sidebar */
  const handleNavigationClick = (id) => {
    setClickedId(id);
    changeProgress(id);
  };

  /** Styling and functionality for sidebar navigation buttons */
  // const fields = Object.keys(questionsData);
  const fieldItem = questionsData.map((question, index) => (
    <div
      key={index}
      className={
        // questionsData[clicked].id === questionsData[field].id
        index===clickedId
          ? 'side-btn side-btn-active'
          : 'side-btn'
      }
      onClick={() => handleNavigationClick(index)}
    >
      {question.field}
    </div>
  ));

  /** Move user to the previous page */
  const backPage = () => {
    let newClickedId = Math.max(clickedId - 1, 0);
    changeProgress(newClickedId);
    setClickedId(newClickedId);
  };

  /** Advances user to the next page */
  const advancePage = () => {
    let newClickedId = Math.min(clickedId + 1, length - 1);
    changeProgress(newClickedId);
    setClickedId(newClickedId);
  };

  /** Handles user pressing the 'Next' button */
  const handleSubmit = (inputs) => {
    // HANDLE INPUTS LATER
    console.log(inputs);
  };

  /** Downloads a google doc when user presses the Download button */
  const handleDownload = (e) => {
    // API ENDPOINT IS CURRENTLY HARDCODED, PLEASE FIX LATER
    window.location.assign(`http://localhost:8081/api/docDownload/${data.docID}`);
  }

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <div>hello</div>
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
              field={questionsData[clickedId].field}
              fieldId={clickedId}
              title={'Right of Nature Ordonnance Template'}
              question={questionsData[clickedId].question}
              inputType={questionsData[clickedId].input_type}
              length={length}
              handleBack={backPage}
              handleSkip={advancePage}
              handleNext={advancePage}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid item xs={1} />
          
          {questionsData[clickedId].description &&
            <HelpBox
              title='TIP'
              description={questionsData[clickedId].description}
            />
          }
        </Grid>
      </Box>
    </div>
  );
};

export default TemplateFiller;
