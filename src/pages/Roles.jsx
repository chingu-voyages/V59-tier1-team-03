import React, { useState } from "react";
import RoleCheckbox from "../components/roleSelection/roleCheckbox";
import {Link} from 'react-router-dom'
import PopUp from "../components/Popup";

const RoleSelection = () => {
    const roles = [{label: "Scrum Master", value: "scrum-master"}, {label: "Scrum Product Owner", value: "scrum-product-owner"}, {label: "UI UX Designer", value: "ui-ux-designer"}, {label: "Web Developer", value: "web-developer"}, {label: "Python Developer", value: "python-developer"}]

    const [selectedOption, setSelectedOption] = useState(null)
    const handleSelection = (value) =>{
// This is a shorter way. 
            setSelectedOption(prev => prev === value ? null : value);

    }

    const validateRole = () => {
        console.log("MIasad");
        if(!selectedOption){
            
            let popup = document.getElementById('popup')
            popup.classList.add("show")
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
            <PopUp message={"Please select a Role before continuing"}/>
            <Link onClick={validateRole} to={selectedOption ? `/questions/${selectedOption}`: ""}><button className="button" >Continue</button></Link>
        </div>
    </>
    )
}

export default RoleSelection