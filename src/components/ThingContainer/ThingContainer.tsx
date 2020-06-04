import React, { useState, useEffect } from "react";
import { getArticleInfo } from "../../apiCalls";
import { Thing } from "../../types";
import "./ThingContainer.css";

interface Props {
  name: string;
  newArticle: () => void;
}

const ThingContainer = (props: Props) => {
  const [data, setData] = useState<Thing | undefined>();

  const { name, newArticle } = props;

  useEffect(() => {
    setData(undefined);
    async function getInfo() {
      if (!name) return;
      const data = await getArticleInfo(name);
      if (data.tags.some((tag) => tag.includes("disambiguation"))) newArticle();
      else setData(data);
    }
    getInfo();
  }, [name, newArticle]);

  if (data)
    return (
      <div className="Thing-Container">
        <h2>{data.name}</h2>
        {data.img && <img src={data.img} alt={data.name} />}
        <p>{data.description}</p>
        <a href={data.url.toString()} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
        <button onClick={props.newArticle}>Awesomer</button>
      </div>
    );
  else
    return (
      <div className="Thing-Container">
        <p>Loading another cool thing...</p>
      </div>
    );
};

export default ThingContainer;
