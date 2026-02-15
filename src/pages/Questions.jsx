import React from "react";
import Checkmark from "../components/checkmark";
import Answerbubble from "../components/question-page/answer-bubble";
import { useParams } from "react-router-dom";
import questions from "../flashcards";

const Questions = () => {
  const { role } = useParams();

  /* let flashcards;
  switch (role) {
    case "Product Owner":
      flashcards = questions['Scrum Product Owner']
      break;
    case "Scrum Master":
      flashcards = questions['Scrum Master']
      break;
    case "UI UX Designer":
      flashcards = questions.
      break;
    case "Web Developer":
      flashcards = questions[3]
      break;
    case "Python Developer":
      flashcards = questions[4]
      break;
    default:
      break;
  }
  
  flashcards = flashcards.flashcards */

  const roleData = questions[role];
  const flashcards = roleData ? roleData.flashcards : [];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="question-main">
        <h2>No questions available for this role.</h2>
      </div>
    );
  }
  const currentCard = flashcards[currentQuestion];

  const nextQuestion = () => {
    setCurrentQuestion((prev) =>
      prev + 1 < flashcards.length ? prev + 1 : prev,
    );
  };

  const previousQuestion = () => {
    setCurrentQuestion((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const formattedRole = role?.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <>
      <div className="question-main">
        <div className="question-title">
          <h2 className="question-title-h2"> {formattedRole} Questions</h2>
          <div className="question-number highlight">{`${currentQuestion + 1} / ${flashcards.length}`}</div>
        </div>

        <div className="question-and-answer-wrapper">
          <div className="display-question">
            {currentCard?.question || "No question available"}
          </div>
          <div className="answer-wrapper">
            {currentCard?.options &&
              Object.entries(currentCard.options).map(([key, value]) => (
                <Answerbubble
                  key={key}
                  letter={key}
                  answer={value}
                  selected={key === currentCard.answer}
                />
              ))}
          </div>
        </div>

        <div className="question-navigation">
          <button onClick={previousQuestion} className="previous">
            Previous
          </button>
          <button onClick={nextQuestion} className="next">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Questions;
