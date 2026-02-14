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
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [savedAnswers, setSavedAnswers] = useState(new Array(flashcards.length));


  const goToQuestion = index => {
    if(index < flashcards.length && index >= 0){
      setCurrentQuestion(index)
      saveAnswer()
      console.log(savedAnswers);
      setCurrentSelection(savedAnswers[index])
      console.log(currentSelection);
      
    }
  }

  const saveAnswer = () => {
    if(currentSelection){
      let currentAnswers = savedAnswers
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

  return (
    <>
      <div className="question-main">
        <div className="question-title">
          <h2 className="question-title-h2"> {role} Questions</h2>
          <div className="question-number highlight">{`${currentQuestion + 1 } / ${flashcards.length}`}</div>
        </div>

        <div className="question-and-answer-wrapper">
          <div className="display-question">{flashcards[currentQuestion].question || "No question available"}</div>
          <div className="answer-wrapper">
            {flashcards[currentQuestion].options && Object.entries(flashcards[currentQuestion].options).map(([key, value]) => (
              <Answerbubble key={key} letter={key} answer={value} selected={key === currentSelection} selectorHandler={handleSelection} />
            ))}
          </div>
        </div>

        <div className="question-navigation">
          <button onClick={() => {goToQuestion(currentQuestion-1)}} className="previous">Previous</button>
          <button onClick={() => {goToQuestion(currentQuestion+1)}} className="next">Next</button>
        </div>
      </div>
      
    </>
  )
}

export default Questions