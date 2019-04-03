import React from 'react';
import PropTypes from 'prop-types';

const Select = ({values, onChange}) => (
  <select defaultValue="English" style={{
      height: `2rem`,
      fontSize: `13px`,
      width: `5rem`,
    }}
    onChange={(event) => onChange(event.target.value)}
    data-testid="select-field"
  >
    {values.map(({label, value}, index) => <option key={index} value={value}>{label}</option>)}
  </select>
);

Select.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;