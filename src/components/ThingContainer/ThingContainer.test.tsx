import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ThingContainer from "./ThingContainer";
import "@testing-library/jest-dom/extend-expect";
import { testThingData, testThingDataNoImg } from "../../testData";

describe("ThingContainer", () => {
  it("should load an explosion gif when nothing is passed in for data", () => {
    const { getByAltText } = render(
      <ThingContainer
        data={null}
        newArticle={() => {}}
        saveArticle={(id) => true}
      />
    );
    expect(getByAltText("BIG OOF")).toBeInTheDocument();
  });

  it("should take in data and display it", () => {
    const { getByText, getByAltText } = render(
      <ThingContainer
        data={testThingData}
        newArticle={() => {}}
        saveArticle={(id) => true}
      />
    );

    expect(getByText("A huge pile of money")).toBeInTheDocument();
    expect(getByText("this is just a lot of money")).toBeInTheDocument();
    expect(getByAltText("A huge pile of money")).toBeInTheDocument();
    expect(getByText("Read more")).toBeInTheDocument();
    expect(getByText("Awesomer")).toBeInTheDocument();
  });

  it("should replace the img with a figure if there isn't an img", () => {
    const { getByLabelText } = render(
      <ThingContainer
        data={testThingDataNoImg}
        newArticle={() => {}}
        saveArticle={(id) => true}
      />
    );

    expect(getByLabelText("no image")).toBeInTheDocument();
  });

  it("should call newArticle if awesomer button is clicked", () => {
    const mockNewArticle = jest.fn();
    const { getByText } = render(
      <ThingContainer
        data={testThingData}
        newArticle={mockNewArticle}
        saveArticle={(id) => true}
      />
    );
    fireEvent.click(getByText("Awesomer"));
    expect(mockNewArticle).toHaveBeenCalled();
  });

  it("should call saveArticle if save button is clicked", () => {
    const mockSaveArticle = jest.fn();
    const { getByText } = render(
      <ThingContainer
        data={testThingData}
        newArticle={() => {}}
        saveArticle={mockSaveArticle}
      />
    );
    fireEvent.click(getByText("save"));
    expect(mockSaveArticle).toHaveBeenCalled();
  });
});
