import { render, screen } from "@testing-library/react";

import App from "../App";
import { Provider } from "react-redux";
import React from "react";
import { store } from '../app/store'

test('renders the root component correctly', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const rootComponent = screen.getByTestId('app-container');
  expect(rootComponent).toBeInTheDocument();
})