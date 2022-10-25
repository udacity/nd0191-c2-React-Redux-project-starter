import * as React from "react";
import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Nav from "./Nav";

describe("Nav", () => {
  it("renders expected links", () => {
    const store = createStore(reducer, middleware);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();

    const leaderboardLink = screen.getByText("Leaderboard");
    expect(leaderboardLink).toBeInTheDocument();

    const newLink = screen.getByText("New");
    expect(newLink).toBeInTheDocument();

    const logoutLink = screen.getByText("Logout");
    expect(logoutLink).toBeInTheDocument();
  });
});
