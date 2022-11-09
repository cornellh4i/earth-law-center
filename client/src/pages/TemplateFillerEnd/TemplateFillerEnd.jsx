import React from 'react';
import './TemplateFillerEnd.css';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/** Component for Preview Page */

const TemplateEnd = (props) => {

    const {state} = useLocation();
    const {docID} = state;

    console.log('state' , state);
    console.log('docID' , docID);

    const docs = [
        { uri:  "https://docs.google.com/document/d/" + docID + "/export?format=pdf"}
      ];


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
    </div>
  );
};
export default TemplateEnd;
