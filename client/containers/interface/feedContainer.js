import React, { useState, useEffect } from 'react';
import InterviewContainer from './interviewContainer.js'


//assemble all of the interviews from the 
//here, make a get request to the server for all interviews
//data returns from .then -> parse data
//the response is an array of object that each represent an iterview
//each object has a property corresponding to the the form fields

// fetch('http://localhost:3000/api')

//     .then(data=>data.json())
//     .then((parsedData)=>console.log('This is the response from the server:', parsedData))
//     .catch((err) => console.log(err));
// //parse 
let interviews = []
// for (let i = 0;i<3;i++){
//     interviews.push(<InterviewContainer id={'interview ' + i}/>)
// }



//define feedContainer as react component
const FeedContainer = props => {
    const[input,setInput] = useState("This is the initial state");
    //let interviews = []
useEffect(()=>{
    console.log('useEffect Triggered')
    fetch('http://localhost:3000/api')
        .then(data=>data.json())
        .then((parsedData)=>{
            let newInterviews = []
            console.log('This is the response from the server:', parsedData)
            for (let i = 0;i<parsedData.length;i++){
                 setInput(i);
                console.log('within for loop', i)
                newInterviews.push(
                        <InterviewContainer id={'interview ' + i} userInfo={parsedData[i]} /> 
                )
            }
            interviews = newInterviews;
            console.log('interviews:', interviews)
        })
        .catch((err) => console.log(err));
})
    return(
    <div className = 'feedContainer'>
       This is the feed container
        {interviews}

    </div>)}
;
export default FeedContainer;


//insert this into the bottom of the sass file

// .interviewBody{
  
//     width : 600px;
//     display: grid;
//     grid-template-columns: 50% 50%;
//     background-color:#ffffff39;
//     grid-gap: 4px;
//     border: 3px rgb(255, 255, 255);
    
  
// }
// .bodyComponent{
//     font-family: 'Montserrat', sans-serif;
//     border: 3px rgb(255, 255, 255);
//     background-color: #24252a38;
//     height:auto;
//     padding: 5px;
//     border-radius:15px;
    

// }

// .bodyComponentTitle{
//     font-weight:bold;
// }

// .interviewHeader{
//     background-color:#8787878a;
    
//     display:grid;
//     grid-template-columns:90% 10%;
//     grid-gap: 4px;
//     border: 3px rgb(255, 255, 255);
//     padding: 10px
// }
// .interviewContainer{
//     background-color:rgb(54, 54, 54);
//     border-radius:15px;
// }