import React from 'react';
import './TemplateBox.css';


const TemplateBox = (props) => {
    return ( 
    /* div wrapping all template boxes */
      <div>
          <div>
            {/*Left Box -- Style appropriately */}
            <h3>{props.titleLaw}</h3>
            <p>{props.descriptionLaw}</p>
          </div>
          <div>
              {/*Right Box --  Style appropriately */}
              <h3>{props.titleLetter}</h3>
            <p>{props.descriptionLetter}</p>
          </div>
      </div>
    );
  };

export default TemplateBox;


