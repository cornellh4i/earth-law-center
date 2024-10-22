import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';
import './TemplateFiller.css';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Backdrop, CircularProgress } from '@mui/material';
import HelpBox from '../../components/HelpBox/HelpBox';
import { useNavigate, useLocation } from 'react-router-dom';

/** Component for Template Filler Page */
const TemplateFiller = () => {
  /**
   * Data from the state passed by TemplateCard; contains the following data:
   * @param docID is the ID of the google doc
   * @param templateTitle is the title of the template
   * @param questionsInputs is the same as the inputs state in the QuestionsAnswer component
   * @param auth is authenticated
   */
  let data = useLocation().state

  let navigate = useNavigate();

  // Redirect to error page if not all states have been passed in
  let invalid = data === null || data.docID === null || data.templateTitle === null || data.questionsInputs === null || data.auth === null;
  if (invalid) {
    data = { docID: "", templateTitle: "", questionsData: "", auth: "" };
  }
  useEffect(() => {
    (async function () {
      if (invalid) {
        navigate("/error");
      }
    })()
  }, []);

  // Storing the initial overview page in the format of a questions object
  const overviewData = {
    "field": "Overview",
    "original_field": "",
    "question": "A letter encouraging lawmakers to recognize that ecosystems have inherent rights, just as humans do",
    "input_type": "",
    "description": "",
  }

  let startInputs = ((data.questionsInputs) ? data.questionsInputs : {})

  const [questionsInputs, setQuestionsInputs] = useState(startInputs)

  // Array of question objects. We initialize it with the overviewData
  const [questionsData, setQuestionsData] = useState([overviewData])

  // Value to render in the progress bar for the navigation sidebar
  const [progress, setProgress] = useState(0);

  // Whether the user is currently logged in
  var already_auth = data.auth === true ? true : false
  const [authenticated, setAuthenticated] = useState(already_auth);

  // The current page clicked by the user, defaults to the first entry in questionsData
  const [clickedId, setClickedId] = useState(0);

  // Title of the template
  const templateTitle = data.templateTitle;

  const [loading, setLoading] = useState(false);

  // Update the progress bar to the correct percentage value
  const changeProgress = (newClickedId) => {
    setProgress(Math.floor(((newClickedId + 1) / questionsData.length) * 100));
  };

  // New temporary constants for sheetID
  let sheetID = '1cAcOx0xhzm8HLhKWsVYX_fTRiNS2UmcINtIc-9Wxd0k'

  // Refetch from API when the state authenticated changes (after user sign-in)
  useEffect(() => {
    (async function () {
      if (authenticated) {
        setLoading(true)
        const response = await fetch(`/api/getQuestions/${sheetID}/${data.docID}`)
        const json = await response.json()
        setQuestionsData(json)
        setProgress(Math.floor((1 / json.length) * 100));
        setLoading(false)
      }
    })()
  }, [authenticated]);

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

  // Handles user pressing the 'Finish' button
  // Error if user clicks the button without inputing any information
  const handleSubmit = (inputs, preview, auth = true) => {
    // EXAMPLE OF INPUTS DATA STRUCTURE
    // inputs = {
    //   0: 'New York',
    //   1: 'Montana',
    //   2: 'Local River'
    // }
    setLoading(true);
    let batchReplaceData = {}
    Object.keys(inputs).map(fieldId => {
      batchReplaceData[questionsData[fieldId].original_field] = inputs[fieldId]
    })

    // EXAMPLE OF FINAL DATA STRUCTURE FOR BATCH REPLACE
    // batchReplaceData = {
    //   '[INSERT STATE]': 'New York',
    //   '[INSERT CITY]': 'Montana',
    //   '[INSERT NAME OF LOCAL ECOSYSTEM(S)]': 'Local River'
    // }

    let path = '/final-download';
    if (preview) {
      path = '/preview';
    }
    const response = fetch(`/api/batchReplaceAllTexts/${data.docID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(batchReplaceData)
    })

    response.then((response) => response.json())
      .then((responseJSON) => {
        navigate(path, { state: { docID: responseJSON.docID, templateTitle: templateTitle, inputs: questionsInputs, oldID: data.docID, auth: auth } });
      });
  };

  // Handles user pressing the 'Back' button before authenticating
  const backPageUnauth = () => {
    let path = '/';
    navigate(path);
  }

  // Handles user pressing the 'Sign In with Google' button
  async function handleAuthentication(e, inputs) {
    const response = await fetch(`/api/preAuthenticate`);
    const success = await response.json() != null;
    handleAuthenticationSuccess(e, inputs, success);
  };

  // Handles a successful authentication
  const handleAuthenticationSuccess = (e, inputs, success) => {
    setAuthenticated(success);
    if (success) {
      setQuestionsData([])
    }
  }

  // Downloads a google doc when user presses the Download button
  const handleDownload = (e) => {
    window.location.assign(`/api/docDownload/${data.docID}`);
  }

  return (
    <div>
      {/* Only show if state is not invalid */}
      {!invalid && (
        <div>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          {questionsData.length > 0 &&
            <Box sx={{ display: 'flex' }}>
              <FieldSideBar
                title='EarthLegislator'
                fieldItem={fieldItem}
                progress={progress}
                handleDownload={handleDownload}
                templateTitle={templateTitle}
                downloadPage={false}
                inputs={questionsInputs}
                handleSubmit={handleSubmit}
                auth={authenticated}
              />

              <Grid pt={5} container spacing={4}>
                <Grid item xs={1} />
                <Grid item xs={6}>
                  <QuestionAnswer
                    field={questionsData[clickedId].field}
                    fieldId={clickedId}
                    title={templateTitle}
                    question={questionsData[clickedId].question}
                    inputType={questionsData[clickedId].input_type}
                    length={questionsData.length}
                    handleBack={authenticated ? backPage : backPageUnauth}
                    handleSkip={advancePage}
                    handleNext={advancePage}
                    handleAuth={handleAuthentication}
                    handleSubmit={handleSubmit}
                    authenticated={authenticated}
                    inputs={questionsInputs}
                    setInputs={setQuestionsInputs}
                  />
                </Grid>
                <Grid item xs={4}>
                  {questionsData[clickedId].description &&
                    <Box style={{ paddingTop: '4.5rem' }}>
                      <HelpBox
                        title={`More about ${questionsData[clickedId].field}`}
                        description={questionsData[clickedId].description}
                      />
                    </Box>
                  }
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </Box>
          }
        </div>
      )}
    </div>
  );
};

export default TemplateFiller;