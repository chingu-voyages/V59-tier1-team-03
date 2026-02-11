import React, { useState } from 'react'
import Checkmark from '../components/checkmark'
import Answerbubble from '../components/question-page/answer-bubble'
import { useParams } from 'react-router-dom'
import questions from '../flashcards'

const Questions = () => {
    
  const {role} = useParams();
  
  const roleData = questions[role]
  const flashcards = roleData ? roleData.flashcards : [];

  const [selecetedAnswer, setSelectedAnswer] = useState();
  const [currentQuestion, setCurrentQuestion] = React.useState(0)

  const nextQuestion = () => {
    setCurrentQuestion((prev)=> prev + 1 < flashcards.length ? prev + 1 : prev)
  }
  
  const previousQuestion = () => {
    setCurrentQuestion((prev)=> prev - 1 >=0 ? prev - 1 : prev)
  }

  const handleSelection = selected => {
    if(selected == selecetedAnswer){
      setSelectedAnswer()
    }else{
      setSelectedAnswer(selected)
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
              <Answerbubble key={key} letter={key} answer={value} selected={key === selecetedAnswer} selectorHandler={handleSelection} />
            ))}
          </div>
        </div>

        <div className="question-navigation">
          <button onClick={previousQuestion} className="previous">Previous</button>
          <button onClick={nextQuestion} className="next">Next</button>
        </div>

      </div>
      
    </>
  )
}

export default Questions