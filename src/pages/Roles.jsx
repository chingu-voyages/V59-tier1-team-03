import React from "react";
import RoleCheckbox from "../components/roleSelection/roleCheckbox";
import {Link} from 'react-router-dom'

const RoleSelection = () => {
    return (
    <>
        <div className="select-role-wrapper">
            <h2 className="title">
                Select a Role
            </h2>
            <div className="role-list">
                <RoleCheckbox option="Scrum Master" />
                <RoleCheckbox option="Product Owner" />
                <RoleCheckbox option="UI/UX Designer" />
                <RoleCheckbox option="Web Developer" />
                <RoleCheckbox option="Python Developer" />
            </div>
            <Link to="/questions"><button className="button">Continue</button></Link>
        </div>
    </>
    )
}

export default RoleSelection