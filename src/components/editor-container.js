import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';

/**
 * Component to wrap aceEditor component, can pass in content and additional styles as props 
 */

const EditorContainer = ({content, style}) => (
  <AceEditor
    style={{
      width: `50%`,
      height: `auto`,
      borderRadius: `10px`,
      ...style
    }}
    editorProps={{$blockScrolling: true}}
    mode="javascript"
    theme="solarized_dark"
    name="cultures"
    fontSize={14}
    highlightActiveLine={true}
    value={content}
    showLineNumbers={true}
    tabSize={2}
    wrapEnabled={true}
  />
);

EditorContainer.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
};

EditorContainer.defaultProps = {
  style: {},
};

export default EditorContainer;