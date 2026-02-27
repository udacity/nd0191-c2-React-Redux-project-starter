import React from "react";
import {store} from "../../store"
import {fireEvent, render, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import NewPoll from "../../components/NewPoll";

describe('New Poll',()=>{
  it("it will matches the snapshot when it renders",()=>{
    const component=render(
        <Provider store={store}>
          <BrowserRouter>
            <NewPoll/>
          </BrowserRouter>
        </Provider>
      );
    expect(component).toMatchSnapshot();
  });
  it("will allow user to create poll when clicking add botton",async()=>{
    const component=render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll/>
        </BrowserRouter>
      </Provider>
    );
    const optionOneInputElement=component.getByTestId("option-one-input");
    const optionTwoInputElement=component.getByTestId("option-two-input");
    const addButtonElement=component.getByTestId("add");
    expect(optionOneInputElement).toBeInTheDocument();
    expect(optionTwoInputElement).toBeInTheDocument();
    expect(addButtonElement).toBeInTheDocument();

    fireEvent.change(optionOneInputElement,{target:{value:"opt one"}});
    fireEvent.change(optionTwoInputElement,{target:{value:"opt two"}});
    expect(optionOneInputElement.value).toBe("opt one");
    expect(optionTwoInputElement.value).toBe("opt two");
  })
})