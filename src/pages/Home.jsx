import React from "react";
import { Link } from "react-router-DOM";

const Home = () => {
  return (
    <main>
      <section className="hero-wrapper">
        <div className="background-bubbles">
          <div className="top-bubble">.</div>
          <div className="middle-bubble">.</div>
          <div className="bottom-bubble">.</div>
        </div>

        <div className="landing-hero">
          <h1>Interview Test</h1>
          <Link to="/roles">
            <button className="start-button">Start</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
