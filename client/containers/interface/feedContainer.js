import React from 'react';
import InterviewContainer from './interviewContainer.js'


//assemble all of the interviews from the 
//here, make a get request to the server for all interviews
//data returns from .then -> parse data
//the response is an array of object that each represent an iterview
//each object has a property corresponding to the the form fields

fetch('http://localhost:3000/api')

    .then(data=>data.json())
    .then((parsedData)=>console.log('This is the response from the server:', parsedData))
    .catch((err) => console.log(err));
//parse 


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