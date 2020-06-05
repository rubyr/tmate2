import React from "react";
import { Thing } from "../../types";
import "./ThingContainer.css";
import explosion from "./explosion.gif";

interface Props {
  data: Thing | null;
  newArticle: () => void;
}

const ThingContainer = (props: Props) => {
  if (props.data) {
    const { name, img, description, url } = props.data;

    return (
      <div className="Thing-Container">
        <h2>{name}</h2>
        {img ? (
          <img src={img} alt={name} />
        ) : (
          <figure aria-label="no image"></figure>
        )}
        <p>{description}</p>
        <a href={url.toString()} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
        <button onClick={props.newArticle}>Awesomer</button>
      </div>
    );
  } else
    return (
      <div className="Thing-Container">
        <img
          className="explosion"
          src={
            explosion +
            `?a=${Math.random()}` /* math.random makes it reload every time*/
          }
          alt="BIG OOF"
        />
      </div>
    );
};

export default ThingContainer;
