import React from 'react';
import InterviewContainer from './interviewContainer.js'


//assemble all of the interviews from the 
//here, make a request to the server
let interviews = []
for (let i = 0;i<3;i++){
    interviews.push(<InterviewContainer id={i}/>)
}

//define feedContainer as react component
const FeedContainer = props => (
    <div className = 'feedContainer'>
       This is the feed container
        {interviews}

    </div>
);
export default FeedContainer;