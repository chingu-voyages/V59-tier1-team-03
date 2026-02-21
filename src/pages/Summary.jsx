import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import questions from "../flashcards"

const Summary = ({correctAnswers, numberOfQuestions}) => {

  const [correctCount, setCorrectCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    const role = localStorage.getItem('quizRole');
    const flashcards = role ? questions[role]?.flashcards || [] : [];

    const correct = savedAnswers.filter((ans, i) => {
      ans === flashcards[i]?.answer
    }).length

    setCorrectCount(correct);
    setTotal(flashcards.length);
  }, [])


  const correctPercent = Math.round((correctCount / total) * 100);
  const wrongPercent = 100 - correctPercent;
  return (
    <div className='summary-main'>
      <div className='result-container'>
        <p className='medium-title'>Results</p>

        <div className="summary-container">
          <div className="score-explanation medium-title">You answered {correctCount}/{total} correctly!</div>

          <div className='percentage-container'>
            
          <p >Correct: {correctPercent}%</p>
          <p >Wrong: {wrongPercent}%</p>
          </div>

          <button className='button retry'>Try again?</button>

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