import React from "react";
import { render } from "@testing-library/react";
import DataDisplay from "./DataDisplay";
import "@testing-library/jest-dom/extend-expect";
import DataTracker from "../../DataTracker";

describe("DataDisplay", () => {
  const data = new DataTracker();
  data.addDecision({ winnerId: "sbeve", loserId: "robert", time: 2049 });
  data.updateStreak({
    name: "sbeve",
    description: "sbeve sure is a thing",
    tags: ["name"],
    url: new URL("http://www.sbeve.com"),
  });
  data.addDecision({ winnerId: "Jeff", loserId: "sbeve", time: 2049 });
  data.updateStreak({
    name: "Jeff",
    description: "jeff is a bastard",
    tags: ["name"],
    url: new URL("http://www.jeff.jeff"),
  });
  data.addDecision({ winnerId: "Jeff", loserId: "geoff", time: 2049 });
  data.updateStreak({
    name: "Jeff",
    description: "jeff is a bastard",
    tags: ["name"],
    url: new URL("http://www.jeff.jeff"),
  });

  it("should render all data tables", () => {
    const { getByText } = render(<DataDisplay allData={new DataTracker()} />);

    expect(getByText("Longest Streaks")).toBeInTheDocument();
    expect(getByText("Quickest Decisions")).toBeInTheDocument();
  });

  it("should render tables of data", () => {
    const { getAllByText } = render(<DataDisplay allData={data} />);

    expect(getAllByText("sbeve").length).toBe(3);
  });
});
