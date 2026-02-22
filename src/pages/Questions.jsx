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
  const [wrongCount, setWrongCount] = useState(0);
  const [questionMistake, setQuestionMistake] = React.useState({});
  const [quizActive, setQuizActive] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState(0);

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

  const submitAnswer = () => {
    if(!quizActive){

      setResults(correctAnswers, flashcards.length)

      navigate("/summary")
      return
    }
    if(state == States.SHOWING){
      goToQuestion(currentQuestion + 1)
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
    setCorrectAnswers(correctAnswers + 1)
    alert(flashcards[currentQuestion].rationale)
    if(currentQuestion === flashcards.length - 1){
      setQuizActive(false)
    }
  }
  const wrongAnswer = () => {
    setWrongCount(wrongCount + 1)
    if (wrongCount >= 3) {
      setQuizActive(false)
    }
    alert("Wrong Answer")
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

            
          <button onClick={submitAnswer} className="next">{quizActive ? (state==States.SHOWING? "Next Question": "Submit Answer"): "Finish Quiz"}</button>
        </div>
      </div>
    </>
  );
};

export default Questions;
