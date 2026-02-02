import React from "react";

const RoleCheckbox = props => {
    return (
        <>
            <label className="role-option-wrapper" for={props.option}>
                <input className="checkbox" type="checkbox" id={props.option}/>
                {props.option}
            </label>
        </>
    )
}

export default RoleCheckbox