import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { mocked } from "ts-jest/utils";
import { getArticleInfo, getRandomArticles } from "../../apiCalls";
import { MemoryRouter, Router } from "react-router-dom";
import { testThingData } from "../../testData";
import { createMemoryHistory } from "history";

jest.mock("../../apiCalls");
mocked(getRandomArticles).mockImplementation((count: number | undefined) =>
  Promise.resolve(Array(count || 1).fill(Math.random().toString(36)))
);
mocked(getArticleInfo).mockImplementation((page: string) =>
  Promise.resolve(testThingData)
);

describe("App", () => {
  it("should render without crashing", async () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => expect(getByRole("main")).toBeInTheDocument());
  });

  it("should have a header, and should load the game page", async () => {
    const { getByText, getAllByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => expect(getByText("TMATE2")).toBeInTheDocument());
    await waitFor(() =>
      expect(getAllByText("A huge pile of money")[0]).toBeInTheDocument()
    );
  });

  it("should load two articles on the game page", async () => {
    const history = createMemoryHistory();
    const { getAllByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    await waitFor(() => {
      expect(getAllByText("A huge pile of money")[0]).toBeInTheDocument();
      expect(getAllByText("A huge pile of money")[1]).toBeInTheDocument();
    });
  });

  it('should remove one article and load another when the other\'s "Awesomer" button is pressed', async () => {
    const history = createMemoryHistory();
    const { getAllByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const button = await waitFor(() => getAllByText(/awesomer/gi)[0]);
    fireEvent.click(button);
    expect(getAllByText("A huge pile of money").length).toEqual(1);

    await waitFor(() =>
      expect(getAllByText("A huge pile of money").length).toEqual(2)
    );
  });

  it("should show the about page when url is equal to '/about'", async () => {
    const history = createMemoryHistory();
    history.push("/about");
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    await waitFor(() =>
      expect(getByText(/THE MOST AWESOMEST THING EVER 2/g)).toBeInTheDocument()
    );
  });
});
