import React from 'react';



const HeaderContainer = props => (
    <div className='interviewHeader'>
        <div >
            <strong>Position Title</strong>
        </div>
        <div>
            {props.username}
        </div>
        <div >Company Name</div>
    </div>
)
export default HeaderContainer