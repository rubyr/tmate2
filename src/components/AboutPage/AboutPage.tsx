import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <article className="About-Page">
      <h1 className="ap-title">THE MOST AWESOMEST THING EVER 2</h1>
      <h3>About</h3>
      <p>
        <a href="https://www.mostawesomestthingever.com/">
          The Most Awesomest Thing Ever
        </a>{" "}
        was (and is, as of June 2020) a website dedicated to "scouring the
        universe for the Most Awesomest Thing. Ever." Unfortunately, it uses
        Adobe Flash, which will no longer be officially supported after December
        2020.
        <br />
        The Most Awesomest Thing Ever 2 (this site) is an unofficial, fan-made
        sequel to the original. This site is made in React, meaning you don't
        have to have anything besides a modern web browser to use it.
        <br />
        This site pulls its data from the English Wikipedia, so the content
        presented may not be entirely appropriate for all audiences (although
        through development, I didn't see anything bad.) This also means the
        matches can and will be esoteric and obscure. This is intentional.
      </p>
    </article>
  );
};

export default AboutPage;
