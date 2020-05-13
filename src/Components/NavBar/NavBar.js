import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
        <div className="NavBarMain">
            <Link to='/about'>About</Link>
            <Link to='/'>Logout</Link>
        </div>
    )
}

export default NavBar;