import React from 'react';


//there are five body components, each with a title and body. Distinct so that they can be styled distinctly.
//location, culture,behavioral questions, technical challenges, and notes/interview description.

const BodyContainer = props => (
    <div>
        <div className='interviewBody'>
            <div className= "bodyComponent">
                <div className='bodyComponentTitle'>Location: </div>
                <div className='bodyComponentDesc'><p></p> {props.interviewInfo.location}<p></p> </div>
            </div>

            <div className= "bodyComponent">
                <div className='bodyComponentTitle'>Culture: </div>
                <div className='bodyComponentDesc'><p></p>  {props.interviewInfo['sense_of_culture']}<p></p> </div>
            </div>

            <div className= "bodyComponent">
                <div className='bodyComponentTitle'>Behavioral Questions:</div>
                <div className = 'bodyComponentDesc'><p></p>  {props.interviewInfo['behavioral_questions']}<p></p> </div>
            </div>

            <div className= "bodyComponent">
                <div className='bodyComponentTitle'>Technical Challenges: </div>
                <div className='bodyComponentDesc'> <p></p> {props.interviewInfo['technical_challenges']}<p></p>  </div>  
            </div>


        </div>
        <div className='interviewBodyNotes'>
            <div className = 'interviewBodyNotesHeader'>
            Notes:
            <p></p>
            </div>
            {/* our code does not handle line breaks. would be cool if it did. */}
            <div className = 'interviewBodyNotesBody'>
                {props.interviewInfo['interview_description']} </div>
            </div>
        </div>
)
export default BodyContainer