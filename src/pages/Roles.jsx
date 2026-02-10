import React, { useState } from "react";
import RoleCheckbox from "../components/roleSelection/roleCheckbox";
import {Link} from 'react-router-dom'
import PopUp from "../components/Popup";

const RoleSelection = () => {
    const roles = ["Scrum Master", "Scrum Product Owner", "UI UX Designer", "Web Developer", "Python Developer"]

    const [selectedOption, setSelectedOption] = useState()
    const handleSelection = role =>{
        if(selectedOption == role){
            setSelectedOption()
        }else{
            setSelectedOption(role);
        }
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
                        role => <RoleCheckbox selected={role==selectedOption? true : false} key={role} option={role} handleSelection={handleSelection}/>
                    )
                }
            </div>
            <PopUp message={"Please select a Role before continuing"}/>
            <Link onClick={validateRole} to={selectedOption ? "/questions/"+selectedOption: "#"}><button className="button" >Continue</button></Link>
        </div>
    </>
    )
}

export default RoleSelection