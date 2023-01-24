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
    //note: when producing queries, we need to pass data to the backend
    //to communicate what fields we want to query with.
    //fetch defaults to get- that's what this one does.
    //get requests' bodies don't work so you'll need to make post request
    //to the backend to pass this info. From there, the backend will
    //construct a query reflecting the desired post
    //alternatively you could write login for this in the front end, but that's intensive
    //for the browser and wouldn't work for large databases.
    //you could def get away with it for this project tho
    fetch('http://localhost:3000/api/posts')
        .then(data=>data.json())
        .then((parsedData)=>{
            //pull all posts from db
            //for each ele in this array, create an interview container.
            //data passed through prop interviewInfo
            let newInterviews = [] //meant to say new set of interviews; not to imply that only new ones are pulled
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
