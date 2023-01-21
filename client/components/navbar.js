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
                <button className = 'nav__links'><Link to = "/login">LOGIN</Link></button>
                <button className = 'signUpButton'><Link to = "/signup">GET STARTED</Link></button>
            </div>
        </div>
    </div>
)

export default Navbar;