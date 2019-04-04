import React from 'react';
import PropTypes from 'prop-types';

import EditorContainer from "./editor-container"; 

/**
 * Takes a header and text for the description, and value for the aceEditor 
 */

const CodeStep = ({header, text, code}) => (
  <section style={{ display: `flex`, justifyContent: `space-around`, marginBottom: `5rem` }}>
    <div style={{
        width: `45%`,
        border: `1px solid lightgrey`,
        padding: `1.5rem`,
        borderRadius: `10px`,
        textAlign: `justify`,
      }}
    >
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
    <EditorContainer content={code} style={{ marginLeft: `1rem` }} />
  </section>
);

CodeStep.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  code: PropTypes.string,
};

CodeStep.defaultProps = {
  header: '',
  text: '',
  code: '',
};

export default CodeStep;