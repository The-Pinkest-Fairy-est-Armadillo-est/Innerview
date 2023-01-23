// import modules
import React from 'react';
import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Post = props => {
    const location = useLocation();
    const navigate = useNavigate();
    const companyNameRef = useRef();
    const roleRef = useRef();
    const locationRef = useRef();
    const cultureRef = useRef();
    const questionsRef = useRef();
    const challengesRef = useRef();
    const descriptionRef = useRef();
    console.log('within post', location.state)
    const handleSubmit = e => {
        e.preventDefault();
        const body = {
            role: roleRef.current.value,
            location: locationRef.current.value,
            behavioral_questions: questionsRef.current.value,
            technical_challenges: challengesRef.current.value,
            sense_of_culture: cultureRef.current.value,
            company_name: companyNameRef.current.value,
            interview_description: descriptionRef.current.value,
            email: location.state.email
        }
        fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON',
            },
            body: JSON.stringify(body),
        })
            .then(data => data.json())
            .then(data => {
                if (data === 'empty field') alert('Please fill in all fields');
                else if (data !== 'empty field') navigate('/interface');
            })
            .catch((err) => console.log('Post Request error:', err))
    }
    
    return (
        <div className = 'postPage'>
            <h1 className = 'postHeader'>Post Interview</h1> 
            <form className = 'postContents' id = 'usrform' onSubmit={handleSubmit}>
                <label 
                    htmlFor = "companyName"
                    className = 'input-line'
                >Company Name:
                </label>
                <textarea
                    name='Company Name' 
                    className = 'sm-input-box' 
                    form='usrform' 
                    placeholder = 'Write company name here.' 
                    ref={companyNameRef}>
                </textarea>
                <label
                    htmlFor = "role" 
                    className = 'input-line'
                >Role/position:
                </label>
                <textarea 
                    name='Role/position' 
                    className = 'sm-input-box' 
                    form='usrform' 
                    placeholder = 'Write role/position here.'
                    ref={roleRef}>
                </textarea>
                <label 
                    htmlFor = "location" 
                    className = 'input-line'
                >Location:
                </label>
                <textarea 
                    name='Location' 
                    className = 'sm-input-box' 
                    form='usrform' 
                    placeholder = 'Write location here.' 
                    ref={locationRef}>
                </textarea>
                <label 
                    htmlFor = "culture" 
                    className = 'input-line'
                >Culture Sense:
                </label>
                <textarea 
                    name='Culture Sense' 
                    className = 'sm-input-box' 
                    form='usrform' 
                    placeholder = "First impressions based on culture." 
                    ref={cultureRef}>
                </textarea>
                <label 
                    htmlFor = "questions"
                    className = 'input-line'
                >Behavioral / Non-Technical Questions:
                </label>
                <textarea 
                    name='Behavioral Questions' 
                    className = 'md-input-box' 
                    form='usrform' 
                    placeholder = 'Write any challenging behavioral or non-technical questions you faced that you would like to share with the class.' 
                    ref={questionsRef}>
                </textarea>
                <label 
                    htmlFor = "challenges" 
                    className = 'input-line'
                >Technical Challenges:
                </label>
                <textarea 
                    name='Technical Challenges' 
                    className = 'md-input-box' 
                    form='usrform' 
                    placeholder = 'Write any technical challenges you were tested on during your interview.' 
                    ref={challengesRef}>
                </textarea>
                <label 
                    htmlFor = "description"
                    className = 'input-line'
                >Interview Description:
                </label>
                <textarea 
                    name='Interview Description' 
                    className = 'lg-input-box' 
                    form='usrform' 
                    placeholder = 'Provide additional details regarding your interview here to share to your classmates.' 
                    ref={descriptionRef}>
                </textarea>
                <button
                    type = 'submit'
                    className = 'signUpButton input-line'
                >Submit
                </button>
            </form>
        </div>
    );
}

// export React component
export default Post;
