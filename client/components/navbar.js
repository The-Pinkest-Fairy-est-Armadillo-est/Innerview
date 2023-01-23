import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
    <div className = 'nav-container'>
        <div className = 'nav-bar'>
            <div className = 'nav-left'>
                <div id = 'logo'>INNERVIEW</div>
            </div>
            <div className = 'nav-menu'>    
                <div className = 'nav__links'>OUTREACH</div>
                <div className = 'nav__links'>RESOURCES</div>
                <div className = 'nav__links'>BOOTCAMP</div>
            </div>
            <div className = 'nav-right'>
            <Link to = "/login"><button className = 'nav__links'>LOGIN</button></Link>
            <Link to = "/signup"><button className = 'signUpButton'>GET STARTED</button></Link>
            </div>
        </div>
    </div>
)

export default Navbar;