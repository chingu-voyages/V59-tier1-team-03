import React, { useState } from "react";
import RoleCheckbox from "../components/roleSelection/roleCheckbox";
import {useNavigate} from 'react-router-dom'
import PopUp from "../components/Popup";

const RoleSelection = () => {
    const navigate = useNavigate();
    const roles = [{label: "Scrum Master", value: "scrum-master"}, {label: "Scrum Product Owner", value: "scrum-product-owner"}, {label: "UI UX Designer", value: "ui-ux-designer"}, {label: "Web Developer", value: "web-developer"}, {label: "Python Developer", value: "python-developer"}]

    const [selectedOption, setSelectedOption] = useState(null)
    const [popup, setPopup] = useState(false)
    const handleSelection = (value) =>{
// This is a shorter way. 
            setSelectedOption(prev => prev === value ? null : value);

    }

    const validateRole = () => {
        console.log("MIasad");
        if(!selectedOption){ 
        setPopup(true);
        setTimeout(() => setPopup(false), 2000);
        } else {
            navigate(`/questions/${selectedOption}`)
        }
    }

    return (
    <>
        <div className="select-role-wrapper">
            <h2 className="title">
                Select a Role
            </h2>
            <div className="role-list">
                {
                    roles.map(
                        role => <RoleCheckbox selected={role.value===selectedOption} key={role.value} option={role.label} handleSelection={()=>handleSelection(role.value)}/>
                    )
                }
            </div>
            <PopUp show={popup} message={"Please select a Role before continuing"}/>
            <button onClick={validateRole} className="button" >Continue</button>
        </div>
    </>
    )
}

export default RoleSelection