import React, { useContext, useEffect, useState } from 'react'
import Checkmark from '../components/checkmark'
import Answerbubble from '../components/question-page/answer-bubble'
import { useParams, useNavigate } from 'react-router-dom'
import questions from '../flashcards'
import QuizContext from "../QuizContext";


const Questions = () => {
  const { correctQuestions, totalQuestions, setResults  } = useContext(QuizContext);
    
  const {role} = useParams();
  const navigate = useNavigate();
  
  const roleData = questions[role]
  const flashcards = roleData ? roleData.flashcards : [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState([]);
  const [attempts, setAttempts] = useState(0);

  const States = Object.freeze({
    ANSWERING : 0,
    SHOWING : 1
  })
  const [state, setState] = useState(States.ANSWERING)

  const currentSelection = savedAnswers[currentQuestion] ?? null;

    if (flashcards.length === 0) {
    return (
      <div className="question-main">
        <h2>No questions available for this role.</h2>
      </div>
    );
  }
  const currentCard = flashcards[currentQuestion];

  useEffect(()=> {
    localStorage.setItem("quizAnswers", JSON.stringify(savedAnswers));
    localStorage.setItem("quizRole", role);
  }, [savedAnswers, role]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizAnswers"));
    const savedRole = localStorage.getItem("quizRole");

    if (saved && savedRole === role && saved.length === flashcards.length) {
      setSavedAnswers(saved);
    } else {
      setSavedAnswers(Array(flashcards.length).fill(null));
    }
  
  setCurrentQuestion(0);
}, [role, flashcards.length]);




  const goToQuestion = (index) => {
    if(index >= 0 && index < flashcards.length ){
      setCurrentQuestion(index)
      console.log(savedAnswers);
      
    }
  }


  const handleSelection = selected => {
    setSavedAnswers(prev => {
      const updated = [...prev]

      
       if (updated[currentQuestion] === selected) {
        updated[currentQuestion] = null
       }else{
      updated[currentQuestion] = selected 
    }


  

    return updated;

    });
  }

  const submitAnswer = () => {
    if (currentSelection === null) {
  alert("Please select an answer first.");
  return;
}

if(state === States.SHOWING){
  if (currentQuestion === flashcards.length - 1) {
  const correct = savedAnswers.filter((ans, i) => ans === flashcards[i]?.answer).length
  setResults(correct, flashcards.length);
      navigate("/summary")
      return
  }
      goToQuestion(currentQuestion + 1)
      setAttempts(0)
      setState(States.ANSWERING)
      return
    }
    
    if(isCorrectAnswer()){
      //Needs rethinking of handleSelection
      correctAnswer()
    }else{
      wrongAnswer()
    }
  }
  const isCorrectAnswer = () => {
    return currentSelection == flashcards[currentQuestion].answer
  }
  const correctAnswer = () => {
    setState(States.SHOWING)
    alert(flashcards[currentQuestion].rationale)
  }

  const wrongAnswer = () => {
    if (attempts < 2) {
      setAttempts(prev => prev + 1)
      alert(`Wrong answer. Try again! Attempts left: ${2 - attempts}`);

    } else {
      alert(
      `Correct answer: ${flashcards[currentQuestion].answer}\n\n${flashcards[currentQuestion].rationale}`
    );
    setState(States.SHOWING)
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
          {/* <button onClick={() => {
            goToQuestion(currentQuestion-1)
            
            }} className="previous" disabled={currentQuestion === 0}>Previous</button> */}

            
          <button onClick={submitAnswer} className="next">{state==States.SHOWING? "Next Question": "Submit Answer"}</button>
        </div>
      </div>
    </>
  );
};

export default Questions;
