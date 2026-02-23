import React from "react";
import BubbleBackground1 from "../backgrounds/bubblebackground-1";
import {Link} from 'react-router-dom'

const Home = () => {

    const [selectedOption, setSelectedOption] = React.useState(null);

    const correctAnswer = "A";

const handleOptionClick = (option) => {
    setSelectedOption(option);
};

    return (
        <>
        <div className="hero-wrapper">
            <BubbleBackground1 />
            <div className="hero-container">
                <div className="hero-left">
                    <span className="hero-badge"> Curated Interview Questions
</span>
                     <h1 className="main-title">Practice Like It's the Real Interview.</h1>
                      
                <p className="main-text">
                    Welcome to Interview Prep Pro — questions for mastering role-specific interview questions One Flashcard at a Time. Whether you're aiming to become a Scrum Product Owner, Scrum Master, UI/UX Designer, Web Developer, or Python Developer, we will help you.
                </p>
                <div className="hero-buttons">
                        <Link to="/roles"><button className="start-button">Start</button></Link>
                        <button className="secondary-button">Learn More</button>
                </div>
                </div>

                <div className="hero-right">
                    <div className="mock-card">
                         <p>Question 1</p>
        <h3>What is an Interview?</h3>
         {[
        "A. A conversation to evaluate a candidate’s skills and experience",
        "B. A type of programming framework",
        "C. A web design technique",
        "D. A database query method"
    ].map((opt, index)=> {
        const optionLetter = opt[0]
        const isSelected = selectedOption === optionLetter;
        let className = "mock-option";
        if (isSelected) {
            className += optionLetter === correctAnswer ? " correct-option" : " wrong-option";
        }
        return <div key={index} className={className} onClick={() => handleOptionClick(optionLetter)}>{opt}</div>
    })}
    {selectedOption && (
        <p style={{
            marginTop: "1rem",
            fontWeight: "700",
            color: selectedOption === correctAnswer ? "#10b981" : "#ef4444"
        }}>
            {selectedOption === correctAnswer ? "Correct!" : "Try again"}
        </p>
    )}
                    </div>
                </div>
            </div>

               
               <section className="how-it-works"><h2>
                    How It Works
                </h2>
                <div className="how-grid">
                    <div className="how-card">
                        <h3>Choose Your Role</h3>
                        <p>Pick the position you're preparing for.</p>
                    </div>
                    <div className="how-card">
                        <h3>Answer Questions</h3>
                        <p>You'll be shown questions related to  your role</p>
                    </div>
                    <div className="how-card">
                        <h3>Error Limit</h3>
                        <p>If you miss a question, you’ll have up to three tries to get it right.</p>
                    </div>
                    <div className="how-card">
<h3>Track Your Progress</h3>
<p>At the end a summary of how well you did will be shown to you</p>
                    </div>
                </div>
                </section>
                
                <section className="cta-section">
                    <h2>Ready to begin?</h2>
                <Link to="/roles"><button className="start-button">Start</button></Link>
                </section>
                
            </div>

        </>
    )
}

export default Home