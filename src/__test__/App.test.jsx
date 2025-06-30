import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App.jsx";
test("Testing app component", () => {
  render(<App />);
  const text = screen.getByText(/First react app/i); // case insensitive search
  const title = screen.getByTitle("ramdom image"); // case sensitive search
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
test("Testing input element", () => {
  render(<App />);
  const inputElement = screen.getByRole("textbox"); // get input element by role
  const inputPlaceholder = screen.getByPlaceholderText("Enter your name"); // get input element by placeholder
  expect(inputElement).toBeInTheDocument();
  expect(inputPlaceholder).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", "user name"); // check if input has name attribute
  expect(inputElement).toHaveAttribute("id", "userid"); // check if input has id attribute
  expect(inputElement).toHaveAttribute("type", "text"); // check if input type attribute is text
  expect(inputElement).toHaveValue("Peeyush Singhal"); // check if input has value
});

describe("group for testing UI", () => {
  test("test 1 for UI", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox"); // get input element by role
    const inputPlaceholder = screen.getByPlaceholderText("Enter your name"); // get input element by placeholder
    expect(inputElement).toBeInTheDocument();
    expect(inputPlaceholder).toBeInTheDocument();
  });
  test("test 2 for UI", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox"); // get input element by role
    const inputPlaceholder = screen.getByPlaceholderText("Enter your name"); // get input element by placeholder
    expect(inputElement).toBeInTheDocument();
    expect(inputPlaceholder).toBeInTheDocument();
  });
});
describe.skip("group for testing api", () => {
  test("test 1 for API", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox"); // get input element by role
    const inputPlaceholder = screen.getByPlaceholderText("Enter your name"); // get input element by placeholder
    expect(inputElement).toBeInTheDocument();
    expect(inputPlaceholder).toBeInTheDocument();
  });
  test("test 2 for API", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox"); // get input element by role
    const inputPlaceholder = screen.getByPlaceholderText("Enter your name"); // get input element by placeholder
    expect(inputElement).toBeInTheDocument();
    expect(inputPlaceholder).toBeInTheDocument();
  });
});
