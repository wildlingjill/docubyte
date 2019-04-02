import React from 'react';
import PropTypes from 'prop-types';

import EditorContainer from "../components/editor-container"; 

const Step = ({header, text, code}) => (
  <div style={{ display: `flex`, alignItems: `center`, justifyContent: `space-around`, marginBottom: `5rem` }}>
    <div style={{
        width: `45%`,
        border: `1px solid lightgrey`,
        padding: `1.3rem`,
        borderRadius: `10px`,
        textAlign: `justify`,
      }}
    >
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
    <EditorContainer content={code} style={{ marginLeft: `1rem` }} />
  </div>
);

Step.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  code: PropTypes.string,
};

Step.defaultProps = {
  header: '',
  text: '',
  code: '',
};

export default Step;