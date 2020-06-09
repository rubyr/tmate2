import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Page404 from "./404";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("404", () => {
  it("should show a disappointing message", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );
    expect(getByText("404")).toBeInTheDocument();
  });
  it("should have a link back to the main page", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Page404 />
      </Router>
    );
    fireEvent.click(getByText(/home/gi));
    expect(history.location.pathname).toBe("/");
  });
});
