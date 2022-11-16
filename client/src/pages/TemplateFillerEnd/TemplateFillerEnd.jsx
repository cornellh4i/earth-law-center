import React from 'react';
import './TemplateFillerEnd.css';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Button from '../../components/Button/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

/** Component for Preview Page */

const TemplateEnd = (props) => {

    const data = useLocation().state;
    const docID = data.docID;
    const oldID = data.oldID;
    const inputs = data.inputs;

    let navigate = useNavigate();

    const docs = [
        { uri:  "https://docs.google.com/document/d/" + docID + "/export?format=pdf"}
      ];

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
            <div className='preview-header'>
                <div className='spacer'/>
                <h1 className='preview-header-text'>TEST TITLE</h1>
                <Link className='exit-btn-link' to='/'><Button css='exit-preview-btn' text={'EXIT'}/></Link>
            </div>
            <div className="preview-doc-container">
                <DocViewer className='preview-docview' pluginRenderers={DocViewerRenderers} documents={docs} config={{
                    header: {
                    disableHeader: true,
                    disableFileName: true,
                    retainURLParams: true
                    }
                }} />
            </div>
            <Button
                text='BACK'
                handleClick={returnToTemplateFiller}
                css='back-btn'
                />
            <Button
                text='BACK'
                handleClick={handleDownload}
                css='continue-btn'
                />
        </div>
    );
};
export default TemplateEnd;
