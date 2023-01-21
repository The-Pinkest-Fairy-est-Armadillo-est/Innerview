// import modules from library
import React from 'react';
import { Link } from 'react-router-dom';

// define 'Interface' React component
const Interface = props => (
    <div className = 'Interface'>
        <button type = 'submit' className = 'signUpButton'><Link to = '/post'>Post Interview</Link></button>
        <div className = 'messageBox'></div>
    </div>
);

export default Interface;