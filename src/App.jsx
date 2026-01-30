import React from "react";

const App = () => {
  return (
    <>
      <header>
        <div className="navigation">
          <button className="navigation-button">Home</button>
          <button className="navigation-button">Role</button>
        </div>
        <div className="date">1/29/2026</div>
      </header>

      <div className="hero-wrapper">
        <div className="background-bubbles">
          <div className="top-bubble">.</div>
          <div className="middle-bubble">.</div>
          <div className="bottom-bubble">.</div>
        </div>

        <div className="landing-hero">
          <h1>Interview Test</h1>
          <button className="start-button">Start</button>
        </div>
      </div>

      <footer>
        <div>Chingu 2025</div>
        <a href="https://github.com/chingu-voyages/V59-tier1-team-03">Github</a>
      </footer>
    </>
  );
};

export default App;
