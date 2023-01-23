import React from 'react';
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = props => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const clickHandler = () => {
        const body = {
            name: nameRef.current.value,
            password: passRef.current.value,
            email: emailRef.current.value,
        }

        fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON',
            },
            body: JSON.stringify(body),
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                return useNavigate('/');
            })
            .catch(err => {
                console.log('Error POST request on Sign up submit:', err);
                return prompt("Bad request");
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
                        onSubmit={clickHandler}
                    >
                        <Link to = '/interface'>Sign up</Link>
                    </button>
                    <button 
                        type='button' 
                        className='signUpButton input-line'
                    >
                        <Link to = '/'>Return home</Link>
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Signup;