import React from 'react';
import HeaderContainer from './interviewContainer/headerContainer';
import BodyContainer from './interviewContainer/bodyContainer';
const InterviewContainer = props => {

return(
    <div>
        <div><p></p></div>
         <div className = 'interviewContainer'>
        <HeaderContainer interviewInfo = {props.interviewInfo}/>
        <BodyContainer  interviewInfo = {props.interviewInfo}/>
        </div>
    </div>
)};

export default InterviewContainer