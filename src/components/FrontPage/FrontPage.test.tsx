import React from "react";
import { render } from "@testing-library/react";
import FrontPage from "./FrontPage";
import "@testing-library/jest-dom/extend-expect";

describe("FrontPage", () => {
  it("should render the title and an about section to the page", () => {
    const { getByText } = render(<FrontPage />);

    expect(getByText("THE MOST AWESOMEST THING EVER 2")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
  });
});
