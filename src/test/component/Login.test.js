const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes?.('React Router Future Flag Warning')) {
    return;
  }
  originalWarn(...args);
};
import '@testing-library/jest-dom';
import React from "react";
import {store} from "../../store"
import {fireEvent, render, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Login from "../../components/Login";


describe('Login',()=>{
  it('it will matches the snapshot when it renders', ()=>{
    const {container}=render(
      <Provider store={store}>
        <BrowserRouter>
          <Login/>
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('will allow user to type username and passwords and clear input elements after clicking button',async()=>{

    const {getByTestId}=render(
      <Provider store={store}>
        <BrowserRouter>
          <Login/>
        </BrowserRouter>
      </Provider>
    );

    const usernameInputElement=getByTestId("username");
    const passwordInputElement=getByTestId("password");
    const submitButtonElement=getByTestId("submit");
    expect(usernameInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();

    fireEvent.change(usernameInputElement,{target:{value:'sarahedo'}});
    fireEvent.change(passwordInputElement,{target:{value:'moowdc'}});
    expect(usernameInputElement.value).toBe("sarahedo");
    expect(passwordInputElement.value).toBe("moowdc");

    
    fireEvent.click(submitButtonElement);
    
    await waitFor(()=>{
      expect(usernameInputElement.value).toBe("");
      expect(passwordInputElement.value).toBe("");
    });
  });
});