import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { getRandomArticles } from "../../apiCalls";
import ThingContainer from "../ThingContainer/ThingContainer";

function App() {
  const [names, setNames] = useState(["", ""]);
  const history = useHistory();

  useEffect(() => {
    async function getArticles() {
      if (history.location.pathname.length < 2) {
        const articles = await getRandomArticles(2);

        setNames(articles.map((s) => s.replace(" (disambiguation)", "")));
      } else {
        const articles = history.location.pathname.split("/");

        if (articles.includes("game")) {
          setNames(articles.filter((s) => s && !s.includes("game")));
        }
      }
    }
    getArticles();
  }, [history]);

  useEffect(() => {
    history.push(`/game/${names[0]}/${names[1]}`);
  }, [names, history]);

  const newArticle = async (id: number) => {
    let articles = await getRandomArticles(2);

    setNames(articles.map((s) => s.replace(" (disambiguation)", "")));
  };

  return (
    <div className="App">
      <Switch>
        <Route
          path="/game/:thing1/:thing2"
          render={({ match }) => (
            <div className="Things">
              <ThingContainer
                name={match.params.thing1}
                newArticle={() => newArticle(0)}
              />
              <ThingContainer
                name={match.params.thing2}
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
