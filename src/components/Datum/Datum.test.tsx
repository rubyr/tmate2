import React from "react";
import { render } from "@testing-library/react";
import Datum from "./Datum";
import "@testing-library/jest-dom/extend-expect";

describe("Datum", () => {
  it("should render its children to the page in a table row", () => {
    const { getByText } = render(
      <table>
        <tbody>
          <Datum>
            <p>hello</p>
            <h1>how are you</h1>
          </Datum>
        </tbody>
      </table>
    );

    expect(getByText("hello")).toBeInTheDocument();
    expect(getByText("how are you")).toBeInTheDocument();
  });
});
