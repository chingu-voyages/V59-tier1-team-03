import React, { useState } from "react";
import RoleCheckbox from "../components/roleSelection/roleCheckbox";
import {Link} from 'react-router-dom'

const RoleSelection = () => {
    const roles = [{label: "Scrum Master", value: "scrum-master"}, {label: "Scrum Product Owner", value: "scrum-product-owner"}, {label: "UI UX Designer", value: "ui-ux-designer"}, {label: "Web Developer", value: "web-developer"}, {label: "Python Developer", value: "python-developer"}]

    const [selectedOption, setSelectedOption] = useState(null)
    const handleSelection = (value) =>{
// This is a shorter way. 
            setSelectedOption(prev => prev === value ? null : value);

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
            <Link to={selectedOption ? `/questions/${selectedOption}`: "#"}><button className="button" disabled={!selectedOption}>Continue</button></Link>
        </div>
    </>
    )
}

export default RoleSelection