import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PollCreate from "./PollCreate";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("PollCreate", () => {
  it("enables submit button with fields filled out", () => {
    const store = createStore(reducer, middleware);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <PollCreate />
        </Provider>
      </MemoryRouter>
    );

    const submitButton = screen.getByText("Submit");

    expect(submitButton).toBeDisabled();

    const optionOneInput = screen.getByTestId("option-one-input");
    const optionTwoInput = screen.getByTestId("option-two-input");

    fireEvent.change(optionOneInput, { target: { value: "OptionOne" } });
    fireEvent.change(optionTwoInput, { target: { value: "OptionTwo" } });

    expect(submitButton).not.toBeDisabled();
  });
});
