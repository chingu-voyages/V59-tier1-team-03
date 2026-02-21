import React, { Component, useContext } from "react";


const {Provider, Consumer} = useContext();

class QuestionProvider extends Component {
    state = {
        correctAnswers : 5,
        totalQuestions : 0,
        setResults : (correct, total) => {
            this.setState({
                correctAnswers: correct,
                totalQuestions: total
            })
        }
    }
    render() {
        return (
            <Provider
                value = {{
  port default QuestionProvider;       ????           correctAnswers: this.state.correctAnswers,
                    totalQuestions: this.state.totalQuestions,
                    setResults: this.state.setResults
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
};

export {QuestionProvider};

export default Consumer