{/*import React, { useState } from "react";*/}
import React from 'react'


const Answerbubble = ({letter, answer, selected}) => {
    return (
        <>
            <div className={`answer-bubble ${selected ? 'answer-bubble-active' : ''}`}>
                <div className="checkbox-container">
                </div>
                <div className="answer-text-wrapper">
                <h3 className="question-letter">{letter}</h3>
                <p>{answer}</p>
                </div>
            </div>
        </>
    )
}

export default Answerbubble