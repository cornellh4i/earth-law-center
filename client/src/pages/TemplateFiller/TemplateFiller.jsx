import React from 'react';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import './TemplateFiller.css';

/** Component for Template Filler Page */

const TemplateFiller = () => {
  return (
    <div>
      <h1>TemplateFiller</h1>
      <QuestionAnswer
        field={'City & State'}
        title={'Right of Nature Ordonnance Template'}
        questions={[
          ['states dropdown select', 'What state does this ordonnance apply to?'],
          ['text input', 'What city does this ordonnance apply to?'],
        ]}
      />
    </div>
  );
};
export default TemplateFiller;
