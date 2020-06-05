import React, { useState, useEffect } from "react";
import { getArticleInfo } from "../../apiCalls";
import { Thing } from "../../types";
import "./ThingContainer.css";

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
        {img && <img src={img} alt={name} />}
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
        <p>Loading another cool thing...</p>
      </div>
    );
};

export default ThingContainer;
