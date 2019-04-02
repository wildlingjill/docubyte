import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';

const EditorContainer = ({content, style}) => (
  <AceEditor
    style={{
      width: `50%`,
      height: `100%`,
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
    enableSnippets={false}
    showLineNumbers={true}
    tabSize={2}
    wrapEnabled={true}
    maxLines={Infinity}
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