import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

const Page404 = () => {
  return (
    <div className="center-page">
      <article className="Page-404">
        <h1>404</h1>
        <p>We didn't have that page in the back, man. Bummer.</p>
        <Link to="/">Party on back home</Link>
      </article>
    </div>
  );
};

export default Page404;
