import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import questions from "../flashcards"
import QuizContext from "../QuizContext";


const Summary = ({correctAnswers, numberOfQuestions}) => {
  const { correctQuestions, totalQuestions, resetResults } = useContext(QuizContext);
  console.log(correctQuestions, totalQuestions, 'from Summary');




  const handleReset = () => {
    resetResults();
  };


  const correctPercent = totalQuestions ? Math.round((correctQuestions / totalQuestions) * 100) : 0;
  const wrongPercent = 100 - correctPercent;
  return (
    <div className='summary-main'>
      <div className='result-container'>
        <p className='medium-title'>Results</p>

        <div className="summary-container">
          <div className="score-explanation medium-title">You answered {correctQuestions}/{totalQuestions} correctly!</div>

          <div className='percentage-container'>
            
          <p >Correct: {correctPercent}%</p>
          <p >Wrong: {wrongPercent}%</p>
          </div>

          <Link to="/"><button onClick={handleReset} className='button retry'>Try again?</button></Link>

          {/*<div className="attempt-number">
            <div className="active-attempt-icon"></div>
            <div className="attempt-icon"></div>
            <div className="attempt-icon"></div>
          </div> */}

          <p className='ending-message'>Keep practicing!</p>
        </div>
      </div>
    </div>
  )
}

export default Summary