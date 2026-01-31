import React from "react";
import { Link } from "react-router-DOM";

const Home = () => {
  return (
    <main>
      <section className="hero-wrapper">
        <div className="background-bubbles">
          <div className="top-bubble-wrapper">
            <div className="top-bubble"></div>
          </div>
          <div className="middle-bubble-wrapper">
            <div className="middle-bubble"></div>
          </div>
          <div className="bottom-bubble-wrapper">
            <div className="bottom-bubble"></div>
          </div>
        </div>

        <div className="landing-hero">
          <h1 className="main-title">Interview Test</h1>
          <button className="start-button">Start</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
