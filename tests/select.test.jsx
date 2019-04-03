import React from 'react';
import {render, fireEvent} from 'react-testing-library';

import Select from "../src/components/select";

test('It should select an option and call onChange handler', () => {
  const onChange = jest.fn();
  const options = [{label: 'Foo', value: 'foo'}, {label: 'Bar', value: 'bar'}, {label: 'Baz', value: 'baz'}];
  
  const {getByTestId} = render(<Select onChange={onChange} values={options} />);
  const selectField = getByTestId("select-field");
  selectField.value = "foo";
  fireEvent.change(selectField);
  expect(onChange).toHaveBeenCalledWith("foo");
  // expect(onChange).toHaveBeenCalledWith("bar");
});