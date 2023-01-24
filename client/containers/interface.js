// import modules from library
import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import FeedContainer from './interface/feedContainer';

// define 'Interface' React component
const Interface = props => {
    const location= useLocation();
    //use location to pass down the user/validation state established in the login page
    return(
    <div className = 'Interface'>
        <button type = 'submit' className = 'signUpButton'><Link to = '/post' state ={location.state} >Post Interview</Link></button>
        <FeedContainer validUser = {location.state}/>
    </div>
)};

export default Interface;