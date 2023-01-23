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
            {bodyElements}
        </div>
        <div className='interviewBodyNotes'>
            <div className = 'interviewBodyNotesHeader'>
            Notes:
            </div>
            <div className = 'interviewBodyNotesBody'>
                The interviewer greeted me with a firm handshake. <br></br> After the interview, I was immediately offered the job on the condition that I participate in the sacrificial blood ritual unquestioningly. <br></br> They offerred me coffee from the office kitchen, which was nice, but it tasted like shit. <br></br>6.5/10 experience overall.
            </div>
        </div>
    </div>
)
export default BodyContainer