import React from 'react';



const HeaderContainer = props => {
console.log('within HeaderContainer', props)

return(
    <div className='interviewHeader'>
        <div className = 'interviewHeaderRole' >
            {props.interviewInfo.role}
        </div>
        <div>
            {props.interviewInfo["name"]}
        </div>
        <div className = 'interviewHeaderCompany'>{props.interviewInfo['company_name']}</div>
    </div>
)}
export default HeaderContainer