import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Header", () => {
  it("should render without crashing", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it("should have a link to the main page", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    const main = getByText(/tmate2/gi);
    expect(main).toBeInTheDocument();

    fireEvent.click(main);
    expect(history.location.pathname).toEqual("/");
  });

  it("should have a link to the game, and to the user statistics", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    const game = getByText(/play/gi);
    expect(game).toBeInTheDocument();

    fireEvent.click(game);
    expect(history.location.pathname).toEqual("/game");

    const stats = getByText(/stats/gi);
    expect(stats).toBeInTheDocument();

    fireEvent.click(stats);
    expect(history.location.pathname).toEqual("/stats");
  });
});
