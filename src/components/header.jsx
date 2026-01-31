import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header>
            <nav className="navigation">
                <Link to="/" className="navigation-button">Home</Link>
                <Link to="/role-selection" className="navigation-button">Role</Link>
            </nav>
            <div className="date">1/29/2026</div>
      </header>
        </>
    )
}

export default Header