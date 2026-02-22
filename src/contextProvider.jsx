import { Component } from "react";
import QuizContext from "./QuizContext";


class QuestionProvider extends Component {
    state = {
        correctQuestions : 0,
        totalQuestions : 0
    };

    setResults = (correct, total) => {
        console.log(correct, total, "from context provider");
        
        this.setState({
            correctQuestions: correct,
            totalQuestions: total
        });
    };

    resetResults = (total = 0) => {
        this.setState({
            correctQuestions : 0,
            totalQuestions : total
        });
    };

    render() {
        return (
            <QuizContext.Provider value={{
                correctQuestions: this.state.correctQuestions,
                totalQuestions: this.state.totalQuestions,
                setResults: this.setResults,
                resetResults: this.resetResults
            }}>
                {this.props.children}
            </QuizContext.Provider>

        );
    };
};

export default QuestionProvider;

