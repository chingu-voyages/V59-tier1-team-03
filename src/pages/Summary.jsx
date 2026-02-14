import React from 'react'
import {Link} from 'react-router-dom'

const Summary = () => {
  return (
    <div className='summary-main'>
      <div className='result-container'>
        <p className='medium-title'>Results</p>

        <div className="summary-container">
          <div className="score-explanation medium-title">You answered 1/3
          correctly!</div>

          <button className='button retry'>Try again?</button>

          <div className="attempt-number">
            <div className="active-attempt-icon"></div>
            <div className="attempt-icon"></div>
            <div className="attempt-icon"></div>
          </div>

          <p className='ending-message'>Keep practicing!</p>
        </div>
      </div>
    </div>
  )
}

export default Summary