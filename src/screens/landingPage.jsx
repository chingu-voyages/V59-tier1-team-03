import React from "react";
import BubbleBackground1 from "../backgrounds/bubblebackground-1";

const LandingPage = () => {
    return (
        <>
        <div className="hero-wrapper">
            <BubbleBackground1 />
            <div className="landing-hero">
                <h1 className="main-title">Interview Test</h1>
                <button className="start-button">Start</button>
            </div>
        </div>
        </>
    )
}

export default LandingPage