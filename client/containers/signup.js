import React from 'react';
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = props => {
    //useRef hook uses document.getElements.... to pull info from dom elements
    //find useRef in jsx attributes of components to determine where the info comes from
    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const clickHandler = (e) => {
        e.preventDefault();
        const body = {
            name: nameRef.current.value,
            password: passRef.current.value,
            email: emailRef.current.value,
        }
        console.log(body.email);
        fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify(body),
        })
            .then(data => data.json())
            .then(data => {
                console.log('data', data);
                if (data === 'missingInfo') {
                    alert('Please fill in all the fields and try again.');
                }
                else if (data === 'userexists') {
                    alert('This email already exists. Please sign-in.');
                }
                else if (data === 'userAdded') {
                    alert('Sign Up Successful! Please sign in.');
                }
            })
            .catch(err => {
                console.log('Error POST request on Sign up submit:', err);
                return alert("Bad request");
            });
    }
    
    return (
        <div className='loginPage'>
            <div className='loginBox'>
                <h1>Sign Up</h1>
                <form className='postContents' onSubmit={clickHandler}>
                    <label 
                        htmlFor='Name'
                    >Name: 
                    </label>
                    <input 
                        type='text' 
                        className='inputBox' 
                        id='Name' 
                        placeholder='Your Name' 
                        ref={nameRef}
                    />
                    <label 
                        htmlFor='Email' 
                        className='input-line'
                    >Email: 
                    </label>
                    <input 
                        type='email' 
                        className='inputBox' 
                        id='Email' 
                        placeholder='Your Name' 
                        ref={emailRef}
                    />
                    <label 
                        htmlFor='Password' 
                        className='input-line'
                    >Password: 
                    </label>
                    <input 
                        type='password' 
                        className='inputBox' 
                        id='Password' 
                        placeholder='Your Password' 
                        ref={passRef}
                    />
                    <button 
                        type='submit' 
                        className='signUpButton input-line' 
                    >Sign up
                    </button>
                    <Link to = '/'><button 
                        type='button' 
                        className='signUpButton input-line'
                    >
                        Return home
                    </button></Link>
                </form>
            </div>
        </div>
    )
};

export default Signup;