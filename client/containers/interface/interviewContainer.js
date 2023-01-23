import React from 'react';
import HeaderContainer from './interviewContainer/headerContainer';
import BodyContainer from './interviewContainer/bodyContainer';
const InterviewContainer = props => {
console.log('within interviewContainer', props.userInfo.name)
return(
    <div>
        <div>_____________________________________________________________________________________________________________________________________</div>
        <div className = 'interviewContainer'>
        <HeaderContainer username = {props.userInfo.name}/>
        <BodyContainer/>
        </div>
    </div>
)};

export default InterviewContainer