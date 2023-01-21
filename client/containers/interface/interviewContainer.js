import React from 'react';
import HeaderContainer from './interviewContainer/headerContainer';
import BodyContainer from './interviewContainer/bodyContainer';
const InterviewContainer = props => (
    <div className = 'interviewContainer'>
        <div>_________________________________________________________________________________</div>
       This is an interviewContainer
       <HeaderContainer/>
       <BodyContainer/>
     
    </div>
);

export default InterviewContainer