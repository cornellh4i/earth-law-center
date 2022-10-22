import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';
import './TemplateFiller.css';

import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HelpBox from '../../components/HelpBox/HelpBox';
import { useLocation } from "react-router-dom";

/** Component for Template Filler Page */
const TemplateFiller = () => {
  /**
   * Data from the state passed by TemplateCard; contains the following data:
   * @param docID is the ID of the google doc
   */
  const data = useLocation().state

  // List of question objects
  const [questionsData, setQuestionsData] = useState([])

  // Value to render in the progress bar for the navigation sidebar
  const [progress, setProgress] = useState(Math.floor((1 / questionsData.length) * 100));

  // The current page clicked by the user, defaults to the first entry in questionsData
  const [clickedId, setClickedId] = useState(0);

  // Update the progress bar to the correct percentage value
  const changeProgress = (newClickedId) => {
    setProgress(Math.floor(((newClickedId + 1) / questionsData.length) * 100));
  };

  // New temporary constants for sheetID
  let sheetID = '1cAcOx0xhzm8HLhKWsVYX_fTRiNS2UmcINtIc-9Wxd0k'

  // Fetches data from template doc on page load
  useEffect(() => {
    (async function () {
      const response = await fetch(`http://localhost:8081/api/getQuestions/${sheetID}/${data.docID}`)
      const json = await response.json()
      setQuestionsData(json)
      setProgress(Math.floor((1 / json.length) * 100));
    })()
  }, []);

  // Handles user clicking a navigation button in the sidebar
  const handleNavigationClick = (id) => {
    setClickedId(id);
    changeProgress(id);
  };

  // Styling and functionality for sidebar navigation buttons
  const fieldItem = questionsData.map((question, index) => (
    <div
      key={index}
      className={
        index === clickedId
          ? 'side-btn side-btn-active'
          : 'side-btn'
      }
      onClick={() => handleNavigationClick(index)}
    >
      {question.field}
    </div>
  ));

  // Move user to the previous page
  const backPage = () => {
    let newClickedId = Math.max(clickedId - 1, 0);
    changeProgress(newClickedId);
    setClickedId(newClickedId);
  };

  // Advances user to the next page
  const advancePage = () => {
    let newClickedId = Math.min(clickedId + 1, questionsData.length - 1);
    changeProgress(newClickedId);
    setClickedId(newClickedId);
  };

  // Handles user pressing the 'Next' button
  const handleSubmit = (inputs) => {
    // EXAMPLE OF INPUTS DATA STRUCTURE
    // inputs = {
    //   0: 'New York',
    //   1: 'Montana',
    //   2: 'Local River'
    // }

    let batchReplaceData = {}
    Object.keys(inputs).map(fieldId => {
      batchReplaceData[questionsData[fieldId].original_field] = inputs[fieldId]
    })
    console.log("this is the submission lol")
    console.log(batchReplaceData)

    // EXAMPLE OF FINAL DATA STRUCTURE FOR BATCH REPLACE
    // batchReplaceData = {
    //   '[INSERT STATE]': 'New York',
    //   '[INSERT CITY]': 'Montana',
    //   '[INSERT NAME OF LOCAL ECOSYSTEM(S)]': 'Local River'
    // }
  };

  // Downloads a google doc when user presses the Download button
  const handleDownload = (e) => {
    // API ENDPOINT IS CURRENTLY HARDCODED, PLEASE FIX LATER
    window.location.assign(`http://localhost:8081/api/docDownload/${data.docID}`);
  }

  return (
    <div>
      {questionsData.length > 0 &&
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
                field={questionsData[clickedId].field}
                fieldId={clickedId}
                title={'Right of Nature Ordonnance Template'}
                question={questionsData[clickedId].question}
                inputType={questionsData[clickedId].input_type}
                length={questionsData.length}
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
      }
    </div>
  );
};

export default TemplateFiller;
