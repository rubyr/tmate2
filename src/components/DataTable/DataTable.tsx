import React from "react";
import "./DataTable.css";

interface Props {
  children: React.ReactNode;
  cols: string[];
  title: string;
}

const DataTable = (props: Props) => {
  const cols = props.cols.map((r) => <th>{r}</th>);
  return (
    <section className="Data-Table">
      <h2>{props.title}</h2>
      {props.children ? (
        <table>
          <tr>{cols}</tr>
          {props.children}
        </table>
      ) : (
        <h3>Nothing here yet.</h3>
      )}
    </section>
  );
};

export default DataTable;
