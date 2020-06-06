import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { getRandomArticles, getArticleInfo } from "../../apiCalls";
import ThingContainer from "../ThingContainer/ThingContainer";
import { Thing } from "../../types";
import Header from "../Header/Header";

function App() {
  const [articleData, setArticleData] = useState<(Thing | null)[]>([]);

  useEffect(() => {
    async function getArticles() {
      setArticleData([await newArticle(), await newArticle()]);
    }
    getArticles();
  }, []);

  const newArticle = async (): Promise<Thing> => {
    let [article] = await getRandomArticles(1);

    const data = await getArticleInfo(article);
    if (
      data.tags.some(
        (tag) => tag.match(/disambiguation/gi) || tag.match(/list(s)* (of)*/gi)
      )
    )
      return newArticle();
    else return data;
  };

  return (
    <main className="App" role="main">
      <Header />
      <Switch>
        <Route path="/stats"></Route>
        <Route
          path="/game"
          render={() => (
            <div className="Things">
              <ThingContainer
                data={articleData[0]}
                newArticle={async () => {
                  setArticleData([articleData[0], null]);
                  setArticleData([articleData[0], await newArticle()]);
                }}
              />
              <ThingContainer
                data={articleData[1]}
                newArticle={async () => {
                  setArticleData([null, articleData[1]]);
                  setArticleData([await newArticle(), articleData[1]]);
                }}
              />
            </div>
          )}
        />
        <Route exact path="/">
          <h1 style={{ textTransform: "uppercase" }}>
            The Most Awesomest Thing Ever 2
          </h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
