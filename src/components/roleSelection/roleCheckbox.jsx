import React from "react";
import Checkmark from "../checkmark";

const RoleCheckbox = ({handleSelection, option, selected}) => {
    return (
        <>
            <div onClick=
            {e => handleSelection(option)} 
            className={`role-option-wrapper ${selected? "role-option-wrapper--selected" : ""}`} >
                <div className={`role-checkbox-container ${selected? "role-checkbox-container--selected" : ""}`}>
                    {
                        (selected) ? <Checkmark /> : <></>
                    }
                </div>
                {option}
            </div>
        </>
    )
}

export default RoleCheckbox