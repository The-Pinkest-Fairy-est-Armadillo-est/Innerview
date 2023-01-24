import React, { useState, useEffect } from 'react';
import InterviewContainer from './interviewContainer.js'

//assemble all of the interviews from the 
//here, make a get request to the server for all interviews
//data returns from .then -> parse data
//the response is an array of object that each represent an iterview
//each object has a property corresponding to the the form fields

let interviews = []

//define feedContainer as react component
const FeedContainer = props => {
    const[input,setInput] = useState("This is the initial state");
    //let interviews = []
useEffect(()=>{
    fetch('http://localhost:3000/api/posts')
        .then(data=>data.json())
        .then((parsedData)=>{
            let newInterviews = []
            for (let i = 0;i<parsedData.length;i++){
                setInput(i);
                newInterviews.unshift(
                <InterviewContainer id={'interview ' + i} interviewInfo={parsedData[i]} /> 
                )}
            interviews = newInterviews;
             })
        .catch((err) => console.log(err));
})
    return(
        <div className = 'feedContainer'>
            {interviews}
        </div>)};


export default FeedContainer;
