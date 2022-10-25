import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("Login", () => {
  it("matches the snapshot", () => {
    const store = createStore(reducer, middleware);

    var view = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("renders expected fields", () => {
    const store = createStore(reducer, middleware);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const userInput = screen.getByTestId("user-input");
    const passwordInput = screen.getByTestId("password-input");
    expect(userInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  it("displays error message for invalid login", () => {
    const store = createStore(reducer, middleware);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const userInput = screen.getByTestId("user-input");
    const passwordInput = screen.getByTestId("password-input");

    fireEvent.change(userInput, { target: { value: "invalidUser" } });
    fireEvent.change(passwordInput, { target: { value: "invalidPassword" } });

    const submitButton = screen.getByText("Submit");

    fireEvent.click(submitButton);

    const loginError = screen.getByTestId("login-error");

    expect(loginError).toBeInTheDocument();
  });

  it("enables submit button with fields filled out", () => {
    const store = createStore(reducer, middleware);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const submitButton = screen.getByText("Submit");

    expect(submitButton).toBeDisabled();

    const userInput = screen.getByTestId("user-input");
    const passwordInput = screen.getByTestId("password-input");

    fireEvent.change(userInput, { target: { value: "user" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(submitButton).not.toBeDisabled();
  });
});
