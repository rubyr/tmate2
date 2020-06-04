import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { getRandomArticles, getArticleInfo } from "../../apiCalls";

function App() {
  useEffect(() => {
    async function getArticles() {
      const articles = await getRandomArticles(1);
    }
    getArticles();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <p>hello, world</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
