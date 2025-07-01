import { fireEvent, render,screen } from "@testing-library/react"
import Events from "../events"
import React from "react";



beforeAll(()=>{
console.log("some time we need to cleamup the database or some other things before running the test cases");

    console.log("before all test cases");
})
beforeEach(()=>{
    console.log("before each test case");
})
test("testing input box",()=>{
    render(<Events/>);
    const inputElement=screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
})
test("tesing onChangeEvent",()=>{
    console.log("test called");
    render(<Events/>);
    const inputElement=screen.getByRole("textbox");
    fireEvent.change(inputElement,{target:{value:"Hello World"}});
    expect(inputElement.value).toBe("Hello World");
})
test("testing button click",()=>{
    render(<Events/>);
    const buttonElement=screen.getByText("click to update data");
    fireEvent.click(buttonElement);
    const headingElement=screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("updated Data");
})
afterAll(()=>{
    console.log("after all test cases");
})
afterEach(()=>{
    console.log("after each test case");
})