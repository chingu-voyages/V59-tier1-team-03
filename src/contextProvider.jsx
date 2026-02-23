import { Component } from "react";
import QuizContext from "./QuizContext";

class QuestionProvider extends Component {
  state = {
    correctQuestions: 0,
    totalQuestions: 0,
  };

  setResults = (correct, total) => {

    this.setState({
      correctQuestions: correct,
      totalQuestions: total,
    });
  };

  resetResults = () => {
    this.setState({
      correctQuestions: 0,
      totalQuestions: 0,
    });

    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizRole");
  };

  render() {
    return (
      <QuizContext.Provider
        value={{
          correctQuestions: this.state.correctQuestions,
          totalQuestions: this.state.totalQuestions,
          setResults: this.setResults,
          resetResults: this.resetResults,
        }}
      >
        {this.props.children}
      </QuizContext.Provider>
    );
  }
}

export default QuestionProvider;
