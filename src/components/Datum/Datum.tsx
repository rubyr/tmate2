import React, { ReactNodeArray } from "react";
import "./Datum.css";

interface Props {
  children: ReactNodeArray;
}

const Datum = (props: Props) => {
  return (
    <tr className="Datum">
      {props.children.map((n, i) => (
        <td key={i}>{n}</td>
      ))}
    </tr>
  );
};

export default Datum;
