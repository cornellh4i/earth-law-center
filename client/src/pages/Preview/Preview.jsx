import React from 'react';
import './Preview.css';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Button from '../../components/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

/** Component for Preview Page 
 *  @param {templateTitle} is the title of the template
*/

const Preview = (props) => {
    const data = useLocation().state;
    const docID = data.docID;
    const oldID = data.oldID;
    const title = data.templateTitle;
    const inputs = data.inputs;
    const auth = data.auth;
    let navigate = useNavigate();

    const docs = [
        { uri: data.docID != null ? "https://docs.google.com/document/d/" + data.docID + "/export?format=pdf" : "https://docs.google.com/document/d/1MOptsvcrhcrYNaKVybRCh5drQOWupfeJ/export?format=pdf" }
    ];

    const returnToTemplateFiller = () => {
        let path = "/template-filler";
        navigate(path, { state: { docID: oldID, questionsInputs: inputs, auth: auth, templateTitle: data.templateTitle } })
    }

    return (
        <div>
            <div className='preview-header'>
                <div className='spacer' />
                <h1 className='preview-header-text'>{data.templateTitle}</h1>
                <div className='exit-btn-link'><Button css='exit-preview-btn' text={'EXIT PREVIEW'} handleClick={returnToTemplateFiller} /></div >
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
        </div>
    );
};
export default Preview;
