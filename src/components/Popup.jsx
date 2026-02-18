import React from "react";

const PopUp = ({show, message}) => {
    return (
        <>
        <div id="popup" className={`popup ${show ? "show" : ""}`}>
            <span className="popuptext">
                {message}
            </span>
        </div>
        </>
    )
} 

export default PopUp