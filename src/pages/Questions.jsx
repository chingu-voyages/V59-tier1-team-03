import React, { useContext, useEffect, useState } from 'react'
import Checkmark from '../components/checkmark'
import Answerbubble from '../components/question-page/answer-bubble'
import { useParams, useNavigate } from 'react-router-dom'
import questions from '../flashcards'

const Questions = () => {

  // const {setCorrectAnswers, setTotalQuestions} = useContext(QuestionContext)
    
  const {role} = useParams();
  const navigate = useNavigate();
  
  const roleData = questions[role]
  const flashcards = roleData ? roleData.flashcards : [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState([]);
  const [wrongCount, setWrongCount] = useState(0);
  const [questionMistake, setQuestionMistake] = React.useState({});

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

    if (saved && savedRole === role) {
      setSavedAnswers(saved);
    } else {
      setSavedAnswers(new Array(flashcards.length).fill(null));
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

      const correctAnswer = currentCard.answer;
       if (updated[currentQuestion] === selected) {
        updated[currentQuestion] = null
       }else{
      updated[currentQuestion] = selected 
    }

    const isWrong = selected !== correctAnswer;

    setQuestionMistake(prev => {
      const recorded = {...prev}

      if (isWrong && !recorded[currentQuestion]) {
        setWrongCount(prev => prev + 1)
        recorded[currentQuestion] = true
      }

      if (!isWrong){
        recorded[currentQuestion] = false
      }
      return recorded;
    });

    return updated;

    });
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
          <button onClick={() => {
            goToQuestion(currentQuestion-1)
            
            }} className="previous" disabled={currentQuestion === 0}>Previous</button>

            
          <button onClick={ () => { if (wrongCount >= 3 || currentQuestion === flashcards.length - 1) {
              navigate("/summary")}
              else {goToQuestion(currentQuestion+1)} }} disabled={currentSelection === null } className="next">{currentQuestion === flashcards.length -1 ? "Finish" : "Next"}</button>
        </div>
      </div>
    </>
  );
};

export default Questions;
