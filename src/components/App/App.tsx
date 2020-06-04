import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { getRandomArticles } from "../../apiCalls";
import ThingContainer from "../ThingContainer/ThingContainer";

function App() {
  const [names, setNames] = useState(["", ""]);

  useEffect(() => {
    async function getArticles() {
      const articles = await getRandomArticles(2);

      setNames(articles.map((s) => s.replace(" (disambiguation)", "")));
    }
    getArticles();
  }, []);

  const newArticle = async (id: number) => {
    let [article] = await getRandomArticles(1);

    setNames(names.splice(id, 1, article));
  };

  return (
    <div className="App">
      <Switch>
        <Route
          path="/game/"
          render={() => (
            <div className="Things">
              <ThingContainer
                name={names[0]}
                newArticle={() => newArticle(0)}
              />
              <ThingContainer
                name={names[1]}
                newArticle={() => newArticle(1)}
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
    </div>
  );
}

export default App;
