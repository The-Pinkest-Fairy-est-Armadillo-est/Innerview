import React from 'react';

//We're gonna need to undo any changes made to the sass file to avoid git issues.
//play around with it, save the desired style mods here, commented out
// then patch them in after we merge
let bodyElements = [
    <div className= "bodyComponent">
        <div className='bodyComponentTitle'>Location: </div>
        <div className='bodyComponentDesc'>The Thunderdome</div>
    </div>,

    <div className= "bodyComponent">
        <div className='bodyComponentTitle'>Culture: </div>
        <div className='bodyComponentDesc'> Pretentious</div>
    </div>,

    <div className= "bodyComponent">
        <div className='bodyComponentTitle'>Behavioral Questions:</div>
        <div className = 'bodyComponentDesc'> Provide the objectively correct solution to the Trolley Problem</div>
    </div>,

    <div className= "bodyComponent">
        <div className='bodyComponentTitle'>Technical Challenges: </div>
        <div className='bodyComponentDesc'> Execute a perfect standing backflip </div>  
    </div>
]

const BodyContainer = props => (
    <div>
        <div className='interviewBody'>
            <div className= "bodyComponent">
                <div className='bodyComponentTitle'>Location: </div>
                <div className='bodyComponentDesc'>{props.interviewInfo.location}</div>
            </div>

            <div className= "bodyComponent">
                <div className='bodyComponentTitle'>Culture: </div>
                <div className='bodyComponentDesc'> {props.interviewInfo['sense_of_culture']}</div>
            </div>

            <div className= "bodyComponent">
                <div className='bodyComponentTitle'>Behavioral Questions:</div>
                <div className = 'bodyComponentDesc'> {props.interviewInfo['behavioral_questions']}</div>
            </div>

            <div className= "bodyComponent">
                <div className='bodyComponentTitle'>Technical Challenges: </div>
                <div className='bodyComponentDesc'> {props.interviewInfo['technical_challenges']} </div>  
            </div>


        </div>
        <div className='interviewBodyNotes'>
            <div className = 'interviewBodyNotesHeader'>
            Notes:
            <p></p>
            </div>
            <div className = 'interviewBodyNotesBody'>
                {props.interviewInfo['interview_description']} </div>
            </div>
        </div>
)
export default BodyContainer