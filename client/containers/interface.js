// import modules from library
import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import FeedContainer from './interface/feedContainer';

// define 'Interface' React component
const Interface = props => {
    const location= useLocation();
    console.log('within interface', location.state)
    return(
    <div className = 'Interface'>
        <button type = 'submit' className = 'signUpButton'><Link to = '/post' state ={location.state} >Post Interview</Link></button>
        <FeedContainer validUser = {location.state}/>
    </div>
)};

export default Interface;