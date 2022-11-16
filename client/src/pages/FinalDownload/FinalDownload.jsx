import React from 'react';
import './FinalDownload.css';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Button from '../../components/Button/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

/** Component for Preview Page */

const FinalDownload = (props) => {

    const data = useLocation().state;
    console.log(data);
    const docID = data.docID;
    const oldID = data.oldID;
    const inputs = data.inputs;

    let navigate = useNavigate();

    const docs = [
        { uri:  "https://docs.google.com/document/d/" + docID + "/export?format=pdf"}
      ];

      const fieldItem = 
        <div className={'side-btn side-btn-active'}>
          Download
        </div>
        

    const returnToTemplateFiller = () => {
        let path = "/template-filler";
        console.log({state: {docID: oldID, questionsInputs: inputs}})
        navigate(path, {state: {docID: oldID, questionsInputs: inputs}})
      }

    const handleDownload = (e) => {
        window.location.assign(`/api/docDownload/${docID}`);
      }


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <FieldSideBar
                title='EarthLegislator'
                fieldItem={fieldItem}
                progress={100}
                handleDownload={handleDownload}
            />
                <Grid pt={2} container spacing={4}>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <h1 className='header-text'>Download</h1>
                        <DocViewer className='docview' pluginRenderers={DocViewerRenderers} documents={docs} config={{
                                header: {
                                disableHeader: true,
                                disableFileName: true,
                                retainURLParams: true
                                }
                            }} />
                        <Box sx={{ display: 'flex', marginTop: '2rem' }}>
                            <Button
                                text='BACK'
                                handleClick={returnToTemplateFiller}
                                css='back-btn'
                                />
                            <div className='buttonSpacer'></div>
                            <Button
                                text='DOCX'
                                handleClick={handleDownload}
                                css='final-download-btn'
                                />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};
export default FinalDownload;
