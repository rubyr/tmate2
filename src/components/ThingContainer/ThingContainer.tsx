import React, { useState } from "react";
import { Thing } from "../../types";
import "./ThingContainer.css";
import explosion from "./explosion.gif";
import plus from "./plus.svg";
import check from "./check.svg";

interface Props {
  data: Thing | null;
  newArticle: () => void;
  saveArticle: (id: string) => boolean;
}

const ThingContainer = (props: Props) => {
  const [btnImg, setBtnImg] = useState(plus);
  if (props.data) {
    const { name, img, description, url } = props.data;

    return (
      <div className="Thing-Container">
        <button
          className="save-btn"
          onClick={() => {
            setBtnImg(props.saveArticle(name) ? check : plus);
          }}
        >
          <img src={btnImg} alt="save" />
          <p>save</p>
        </button>
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
