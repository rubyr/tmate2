import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { getRandomArticles, getArticleInfo } from "../../apiCalls";
import ThingContainer from "../ThingContainer/ThingContainer";
import { Thing } from "../../types";
import Timer from "../../Timer";
import Header from "../Header/Header";
import DataTracker from "../../DataTracker";
import DataDisplay from "../DataDisplay/DataDisplay";
import AboutPage from "../AboutPage/AboutPage";
import GameBackground from "../GameBackground/GameBackground";

function App() {
  const [articleData, setArticleData] = useState<(Thing | null)[]>([]);
  const [data, setData] = useState(new DataTracker());
  const [currentTime, setTimer] = useState<Timer>(new Timer());

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
    ) {
      setTimer(new Timer());
      return newArticle();
    } else return data;
  };

  const thingWin = async (id: number) => {
    const newData = new DataTracker(data);
    newData.updateStreak(articleData[id] as Thing);
    newData.addDecision({
      winnerId: articleData[id]?.name as string,
      loserId: articleData[1 - id]?.name as string,
      time: currentTime?.ms || Infinity,
    });

    setData(newData);
    setTimer(new Timer());

    const artData = [...articleData];

    artData[1 - id] = null;
    setArticleData([...artData]);
    artData[1 - id] = await newArticle();
    setArticleData([...artData]);
  };

  return (
    <main className="App" role="main">
      <Header />
      <Switch>
        <Route path="/stats">
          <DataDisplay allData={data} />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route
          exactpath="/"
          render={() => (
            <div className="Things">
              <ThingContainer
                data={articleData[0]}
                newArticle={() => thingWin(0)}
              />
              <ThingContainer
                data={articleData[1]}
                newArticle={() => thingWin(1)}
              />
            </div>
          )}
        />
      </Switch>
      <GameBackground />
    </main>
  );
}

export default App;
