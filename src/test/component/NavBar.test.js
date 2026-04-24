const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes?.('React Router Future Flag Warning')) {
    return;
  }
  originalWarn(...args);
};

import React from "react";
import {store} from "../../store"
import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import NavBar from "../../components/NavBar";
import { setAuthedUser } from "../../actions/authedUser";


describe('Navigate Bar', ()=>{
  it("it will matches the snapshot when it renders", ()=>{
    const component=render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
})