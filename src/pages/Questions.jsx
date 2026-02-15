import React, { useState } from 'react'
import Checkmark from '../components/checkmark'
import Answerbubble from '../components/question-page/answer-bubble'
import { useParams } from 'react-router-dom'
import questions from '../flashcards'

const Questions = () => {
    
  const {role} = useParams();
  
  const roleData = questions[role]
  const flashcards = roleData ? roleData.flashcards : [];

  const [currentSelection, setCurrentSelection] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState(new Array(flashcards.length).fill(null));

    if (!flashcards || flashcards.length === 0) {
    return (
      <div className="question-main">
        <h2>No questions available for this role.</h2>
      </div>
    );
  }
  const currentCard = flashcards[currentQuestion];

  useEffect(() => {
  setSavedAnswers(new Array(flashcards.length).fill(null));
  setCurrentQuestion(0);
  setCurrentSelection(null);
}, [role]);



  const goToQuestion = (index) => {
    if(index >= 0 && index < flashcards.length ){
      saveAnswer()
      setCurrentQuestion(index)
      console.log(savedAnswers);
      setCurrentSelection(savedAnswers[index])
      console.log(currentSelection);
      
    }
  }

  const saveAnswer = () => {
    if(currentSelection){
      const currentAnswers = [...savedAnswers]
      currentAnswers[currentQuestion] = currentSelection
      setSavedAnswers(currentAnswers)
    }
  }

  const handleSelection = selected => {
    if(selected == currentSelection){
      setCurrentSelection()
    }else{
      setCurrentSelection(selected)
    }
  }

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
                  selected= {key === currentSelection}
                  selectorHandler={handleSelection}
                />
              ))}
          </div>
        </div>

        <div className="question-navigation">
          <button onClick={() => {goToQuestion(currentQuestion-1)}} className="previous">Previous</button>
          <button onClick={() => {goToQuestion(currentQuestion+1)}} className="next">Next</button>
        </div>
      </div>
    </>
  );
};

export default Questions;
