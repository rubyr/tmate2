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

    const stats = getByText(/stats/gi);
    expect(stats).toBeInTheDocument();

    fireEvent.click(stats);
    expect(history.location.pathname).toEqual("/stats");

    const about = getByText(/about/gi);
    expect(about).toBeInTheDocument();

    fireEvent.click(about);
    expect(history.location.pathname).toEqual("/about");
  });
});
