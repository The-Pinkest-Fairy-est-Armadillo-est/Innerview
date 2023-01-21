// import modules from library
import React from 'react';
import { Link } from 'react-router-dom';
import FeedContainer from './interface/feedContainer';

// define 'Interface' React component
const Interface = props => (
    <div className = 'Interface'>
        <button type = 'submit' className = 'signUpButton'><Link to = '/post'>Post Interview</Link></button>
        <FeedContainer/>
    </div>
);

export default Interface;