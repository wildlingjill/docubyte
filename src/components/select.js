import React from "react";
import PropTypes from "prop-types";

/**
 * Select component takes an array of label-value objects, onChange handler and default value
 */

const Select = ({defaultValue, values, onChange, testId}) => (
  <select defaultValue={defaultValue} style={{
      height: `2rem`,
      fontSize: `13px`,
      width: `auto`,
      border: `1px solid lightgrey`,
      backgroundColor: `white`,
    }}
    onChange={(event) => onChange(event.target.value)}
    // data-testid used for jest test in select.test.jsx file
    data-testid={testId}
  >
    {values.map(({label, value}, index) => <option key={index} value={value}>{label}</option>)}
  </select>
);

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string,
};

Select.defaultProps = {
  testId: "select-field",
};

export default Select;