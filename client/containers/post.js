// import modules
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// define a 'Post' React functional component
const clickHandler = (e) => {
    console.log('hi');
    console.log(e.target.parentNode.value);
}

const Post = props => (
    <div className = 'postPage'>
        <h1 className = 'postHeader'>Post Interview</h1> 
        <form className = 'postContents' id = 'usrform'>
            <label htmlFor = "name" className = 'input-line'>Company Name:</label>
            <textarea name='Company Name' className = 'sm-input-box' form='usrform' placeholder = 'Write company name here.'></textarea>
            <label htmlFor = "name" className = 'input-line'>Role/position:</label>
            <textarea name='Role/position' className = 'sm-input-box' form='usrform' placeholder = 'Write role/position here.'></textarea>
            <label htmlFor = "name" className = 'input-line'>Location:</label>
            <textarea name='Location' className = 'sm-input-box' form='usrform' placeholder = 'Write location here.'></textarea>
            <label htmlFor = "name" className = 'input-line'>Culture Sense:</label>
            <textarea name='Culture Sense' className = 'sm-input-box' form='usrform' placeholder = "First impressions based on culture."></textarea>
            <label htmlFor = "name" className = 'input-line'>Behavioral / Non-Technical Questions:</label>
            <textarea name='Behavioral Questions' className = 'md-input-box' form='usrform' placeholder = 'Write any challenging behavioral or non-technical questions you faced that you would like to share with the class.'></textarea>
            <label htmlFor = "name" className = 'input-line'>Technical Challenges:</label>
            <textarea name='Technical Challenges' className = 'md-input-box' form='usrform' placeholder = 'Write any technical challenges you were tested on during your interview.'></textarea>
            <label htmlFor = "name" className = 'input-line'>Interview Description:</label>
            <textarea name='Interview Description' className = 'lg-input-box' form='usrform' placeholder = 'Provide additional details regarding your interview here to share to your classmates.'></textarea>

            <button type = 'submit' className = 'signUpButton input-line' onClick={clickHandler}><Link to = '/interface'>Sign in</Link></button>
        </form>
    </div>
);

// export React component
export default Post;