import React from "react";
import {render, fireEvent} from "react-testing-library";

import IndexPage from "../src/pages/index";
import {translations} from "../src/translations/translations";

/**
 * hack to get tests running
 * issue: https://github.com/gatsbyjs/gatsby/issues/6240
 */

beforeEach(() => {
  global.___loader = {
    enqueue: jest.fn(),
  };
});

/**
 * test for the index page component, to test the language picker and make sure the right language is returned for the description
 */

test('It should render the index page and change the language', () => {
  // render index page component
  const {getByTestId} = render(<IndexPage />);

  // get the current value of the index page description
  const description = getByTestId("indexDescription");

  // assert that you expect it to match the english description from the translations object
  // second line is to trigger a failing test 
  expect(description.innerHTML).toBe(translations['en'].body.description);
  // expect(description.innerHTML).toBe(translations['fr'].body.description);

  // get the language picker select component
  const selectField = getByTestId("language-picker");

  // set the value of the select to french, and fire the event
  selectField.value = "fr";
  fireEvent.change(selectField);

  // assert that you expect the description to equal the french description from the translations object
  expect(description.innerHTML).toBe(translations['fr'].body.description);

  // same test as above, for spanish - set select value and fire event, assert that the description is correct
  selectField.value = "es";
  fireEvent.change(selectField);

  expect(description.innerHTML).toBe(translations['es'].body.description);
});