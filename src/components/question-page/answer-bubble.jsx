import React from "react";
import Checkmark from "../checkmark";

const Answerbubble = ({ letter, answer, selected, selectorHandler }) => {
  return (
    <>
      <div
        onClick={(e) => {
          selectorHandler(letter);
        }}
        className={`answer-bubble ${selected ? "answer-bubble-active" : ""}`}
      >
        <div className="checkbox-container">
          {selected ? <Checkmark></Checkmark> : <></>}
        </div>
        <div className="answer-text-wrapper">
          <h3 className="question-letter">{letter}</h3>
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default Answerbubble;
