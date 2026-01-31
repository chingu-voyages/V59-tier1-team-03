import React from 'react'
import {Link} from 'react-router-DOM'

const Header = () => {

    
    function todaysDate() {
        const today = new Date();

        return <p>{today.toDateString()}</p>;
    }
  return (
    <header>
        <div className="navigation">
            <Link to="/"><button className="navigation-button">Home</button></Link>
          
          <Link to="/roles"><button className="navigation-button">Role</button></Link>
        </div>
        <div className="date">{todaysDate()}</div>
      </header>
  )
}

export default Header