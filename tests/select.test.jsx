import React from "react";
import {render, fireEvent} from "react-testing-library";

import Select from "../src/components/select";

/**
 * test for the Select component, to set values and check the result
 */

test('It should select an option and call onChange handler', () => {
  // set up a function as an onChange handler to pass in as prop
  const onChange = jest.fn();
  // options array, for the values of the select component
  const options = [{label: "Foo", value: "foo"}, {label: "Bar", value: "bar"}, {label: "Baz", value: "baz"}];
  
  // render the select component with the onChange handler, the values array and a default value
  const {getByTestId} = render(<Select onChange={onChange} values={options} defaultValue={options[1].value} />);

  // get the select field by the test id
  const selectField = getByTestId("select-field");

  // set the value of the select field
  selectField.value = "foo";

  // fire the event to change the value
  fireEvent.change(selectField);

  // check that the value of the select is as expected
  // second line is to trigger a failing test
  expect(onChange).toHaveBeenCalledWith("foo");
  // expect(onChange).toHaveBeenCalledWith("bar");
});