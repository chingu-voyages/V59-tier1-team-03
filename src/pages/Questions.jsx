import React from 'react'

const Questions = () => {
  return (
    <>
      <div className="question-main">
        <div className="question-title">
          <h2 className="question-title">Questions</h2>
          <div className="question-number">1/3</div>
        </div>

        <div className="question-and-answer-wrapper">
          <div className="display-question">A developer asks you to clarify a requirement for a user story during the Sprint. What is the best immediate action?</div>
          <div className="answer-wrapper">
            <div className="answer-bubble">
              <input type="checkbox" />
              <h3>A</h3>
              <p>Tell them to wait until the next Sprint Planning meeting.</p>
            </div>

            <div className="answer-bubble">
              <input type="checkbox" />
              <h3>A</h3>
              <p>Tell them to wait until the next Sprint Planning meeting.</p>
            </div>

            <div className="answer-bubble">
              <input type="checkbox" />
              <h3>A</h3>
              <p>Tell them to wait until the next Sprint Planning meeting.</p>
            </div>

            <div className="answer-bubble">
              <input type="checkbox" />
              <h3>A</h3>
              <p>Tell them to wait until the next Sprint Planning meeting.</p>
            </div>            
          </div>



        </div>

        <div className="question-navigation">
          <button className='previous'>Previous</button>
          <button className='next'>Next</button>
        </div>

      </div>
      
    </>
  )
}

export default Questions