import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { getRandomArticles } from "../../apiCalls";
import ThingContainer from "../ThingContainer/ThingContainer";

function App() {
  const [names, setNames] = useState(["", ""]);

  useEffect(() => {
    async function getArticles() {
      let articles = await getRandomArticles(2);

      setNames(articles.map((s) => s.replace(" (disambiguation)", "")));
    }
    getArticles();
  }, []);

  const newArticle = async (id: number) => {
    let articles = await getRandomArticles(2);

    setNames(articles.map((s) => s.replace(" (disambiguation)", "")));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Things">
          <ThingContainer name={names[0]} id={0} newArticle={newArticle} />
          <ThingContainer name={names[1]} id={1} newArticle={newArticle} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
