import React from "react";
import { render } from "@testing-library/react";
import DataTable from "./DataTable";
import "@testing-library/jest-dom/extend-expect";

describe("DataTable", () => {
  const testData = (
    <>
      <tr>
        <td>hello</td>
        <td>world</td>
      </tr>
      <tr>
        <td>another test</td>
        <td>i hope it works</td>
      </tr>
    </>
  );
  it("should render a title", () => {
    const { getByText } = render(
      <DataTable title="table one" cols={["test1", "test2"]}>
        {testData}
      </DataTable>
    );

    expect(getByText("table one")).toBeInTheDocument();
  });

  it("should render all column headers given in cols", () => {
    const { getByText } = render(
      <DataTable title="" cols={["test1", "test2"]}>
        {testData}
      </DataTable>
    );

    expect(getByText("test1")).toBeInTheDocument();
    expect(getByText("test2")).toBeInTheDocument();
  });

  it("should render all children components given", () => {
    const { getByText } = render(
      <DataTable title="" cols={["test1", "test2"]}>
        {testData}
      </DataTable>
    );

    expect(getByText("hello")).toBeInTheDocument();
    expect(getByText("world")).toBeInTheDocument();
    expect(getByText("another test")).toBeInTheDocument();
    expect(getByText("i hope it works")).toBeInTheDocument();
  });

  it("should render a message if there is no data", () => {
    const { getByText } = render(
      <DataTable title="" cols={["test1", "test2"]} />
    );

    expect(getByText("Nothing here yet.")).toBeInTheDocument();
  });
});
