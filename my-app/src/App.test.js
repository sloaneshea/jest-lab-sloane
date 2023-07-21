import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

test('Class: checking checkbox function', () => {
  render(<App />);
  //Click on checkbox
  userEvent.click(screen.getByTestId("checkbox"));

  expect(screen.getByTestId("checkbox")).toBeChecked()
  // Checking if checkbox is not checked
});

test('Contains enter button', () => {
  render(<App />);

  //get enter button button by attribute and name
  const enterButton = screen.queryByRole('button', { name: 'Enter' });

  //make sure it exists on page
  expect(enterButton).toBeInTheDocument;
});