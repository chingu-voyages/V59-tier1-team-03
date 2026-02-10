import React from "react";

const PopUp = ({message}) => {
    return (
        <>
        <div id="popup" className="popup" onClick={
            () => {
                let popup = document.getElementById('popup')
                popup.classList.toggle("show")
            }
        }>
            <span className="popuptext">
                {message}
            </span>
        </div>
        </>
    )
} 

export default PopUp