import React from 'react';
import './FinalDownload.css';
import FieldSideBar from '../../components/FieldSideBar/FieldSideBar';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Button from '../../components/Button/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** Component for Preview Page */

const FinalDownload = () => {

    const data = useLocation().state;
    const docID = data.docID;
    const oldID = data.oldID;
    const title = data.templateTitle;
    const inputs = data.inputs;
    let navigate = useNavigate();

    const docs = [
        { uri: "https://docs.google.com/document/d/" + docID + "/export?format=pdf" }
    ];

    const fieldItem = <div></div>

    const returnToTemplateFiller = () => {
        let path = "/template-filler";
        navigate(path, { state: { docID: oldID, questionsInputs: inputs, auth: true, templateTitle: title } })
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
                    templateTitle={title}
                    downloadPage={true}
                />
                <Grid pt={2} container spacing={4}>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                        <Typography pt={1} pb={1} variant='h4'
                            sx={{ fontWeight: 'bold', fontFamily: 'Nunito', color: '#64926E', fontSize: 36 }}>
                            Download
                        </Typography>
                        <Typography pt={1} pb={1} variant='h6' sx={{ fontFamily: 'Nunito' }}>{title}</Typography>
                        <DocViewer className='docview' pluginRenderers={DocViewerRenderers} documents={docs} config={{
                            header: {
                                disableHeader: true,
                                disableFileName: true,
                                retainURLParams: true
                            }
                        }} />
                        <Box sx={{ display: 'flex', position: 'absolute', paddingTop: '1rem', paddingBottom: '2rem' }}>
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
