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
                <Link to="/roles"><button className="start-button">Start</button></Link>
            </div>
        </div>
        </>
    )
}

export default Home