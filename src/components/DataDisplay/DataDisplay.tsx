import React from "react";
import DataTracker from "../../DataTracker";
import Datum from "../Datum/Datum";
import "./DataDisplay.css";
import DataTable from "../DataTable/DataTable";

interface Props {
  allData: DataTracker;
}

const DataDisplay = (props: Props) => {
  const { longestStreaks, quickestDecisions } = props.allData;
  const streaks =
    longestStreaks.length &&
    longestStreaks.map((streak) => (
      <Datum key={streak.id + streak.length}>
        <h4>{streak.id}</h4>
        <p>{streak.length}</p>
      </Datum>
    ));

  const quickest =
    quickestDecisions.length &&
    quickestDecisions.map((decision) => (
      <Datum key={decision.winnerId + decision.loserId + decision.time}>
        <h4>{decision.winnerId}</h4>
        <p>{decision.loserId}</p>
        <p>{decision.time / 1000} s</p>
      </Datum>
    ));
  return (
    <main role="main" className="Data-Display">
      <DataTable title="Longest Streaks" cols={["Item", "Streak Length"]}>
        {streaks}
      </DataTable>
      <DataTable title="Quickest Decisions" cols={["Winner", "Loser", "Time"]}>
        {quickest}
      </DataTable>
    </main>
  );
};

export default DataDisplay;
