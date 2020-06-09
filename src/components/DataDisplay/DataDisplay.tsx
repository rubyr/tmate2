import React from "react";
import DataTracker from "../../DataTracker";
import Datum from "../Datum/Datum";
import "./DataDisplay.css";
import DataTable from "../DataTable/DataTable";
import { Bar } from "react-chartjs-2";

interface Props {
  allData: DataTracker;
}

const DataDisplay = (props: Props) => {
  const { longestStreaks, quickestDecisions, saved } = props.allData;
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

  const graph = (
    <div className="chartContainer">
      <Bar
        options={{
          title: {
            display: true,
            text: "Longest Streaks",
          },
          legend: false,
          scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
        }}
        data={{
          labels: longestStreaks.map((s) => s.id.slice(0, 21)),
          datasets: [
            {
              label: "Longest Streak",
              backgroundColor: [
                "#dd332266",
                "#dd882266",
                "#dddd2266",
                "#88dd2266",
                "#33dd3366",
                "#22dd8866",
                "#22dddd66",
                "#2288dd66",
                "#2233dd66",
                "#2222dd66",
              ],
              data: longestStreaks.map((s) => s.length),
            },
          ],
        }}
      />
    </div>
  );
  return (
    <article className="Data-Display">
      <DataTable title="Longest Streaks" cols={["Item", "Streak Length"]}>
        {streaks}
      </DataTable>
      <DataTable title="Quickest Decisions" cols={["Winner", "Loser", "Time"]}>
        {quickest}
      </DataTable>
      {longestStreaks.length && typeof jest !== "object" && graph}
      <section className="saved-items">
        <h2>Saved Items</h2>
        <ul>
          {saved.map((thing) => (
            <li>
              <a
                href={thing.url.toString()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {thing.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default DataDisplay;
