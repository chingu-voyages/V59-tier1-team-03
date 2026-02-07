import React from "react";
import BubbleBackground1 from "../backgrounds/bubblebackground-1";
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className="hero-wrapper">
            <BubbleBackground1 />
            <div className="landing-hero">
                <h1 className="main-title">Interview Test</h1>
                <h2>
                    Practice for your Interview, One Flashcard at a Time
                </h2>
                <p className="main-text">
                    Welcome to Interview Prep Pro — questions for mastering role-specific interview questions. Whether you're aiming to become a Scrum Product Owner, Scrum Master, UI/UX Designer, Web Developer, or Python Developer, we will help you.
                </p>
                <h2>
                    How It Works
                </h2>
                <ol>
                    <li>Choose Your Role – Pick the position you're preparing for.</li>
                    <li>Answer Questions – You'll be shown questions related to  your role</li>
                    <li>Error Limit – If you miss a question, you’ll have up to three tries to get it right.</li>
                    <li>Track Your Progress – At the end a summary of how well you did will be shown to you</li>
                </ol>
                <h2>Ready to begin?</h2>
                <Link to="/roles"><button className="start-button">Start</button></Link>
            </div>
        </div>
        </>
    )
}

export default Home