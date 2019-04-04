import React from "react";
import PropTypes from "prop-types";

/**
 * Take image name, and alt/height/width props for the image, as well as header and text for step 
 */

const SequenceStep = ({imageName, imageAlt, imageHeight, imageWidth, header, text}) => (
  <section style={{
    display: `flex`,
    border: `1px solid lightgrey`,
    borderRadius: `10px`,
    padding: `2rem`,
    marginBottom: `3rem`,
    alignItems: `center`,
    }}
  >
    <img
      src={imageName}
      alt={imageAlt}
      style={{
        width: imageWidth,
        height: imageHeight,
        margin: `2rem 5rem 2rem 0`,
      }} 
    />
    <div>
      <h3>{header}</h3>
      <p style={{ textAlign: `justify` }}>{text}</p>
    </div>
  </section>
);

SequenceStep.propTypes = {
  imageName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

SequenceStep.defaultProps = {
  imageName: "",
  imageAlt: "Alternate description not available",
  imageHeight: `20rem`,
  imageWidth: `20rem`,
};

export default SequenceStep;