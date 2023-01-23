// import modules
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';




// define 'Login' React functional component using implicit return ()
const Login = props => {

    const[loginInfo,setLoginInfo] = useState({email: null, password: null});
    const emailRef = useRef();
    const passwordRef = useRef();

    const iClickedTheDamnButton=()=>{
        console.log('clicked the damn button')
        const body = {username : emailRef.current.value, password : passwordRef.current.value}
        console.log(body)
    }
 

    
    
    
    return(
    <div className = 'loginPage'>
        <div className = 'loginBox'>
            <div className = 'loginBoxHeader'>Login</div>
            <form onSubmit={iClickedTheDamnButton}>
                <input type = 'email' id = 'email' className = 'inputBox' placeholder = 'Your Email' ref = {emailRef}/>
                <input type = 'password' id = 'password' className = 'inputBox' placeholder = 'Your Password' ref = {passwordRef}/>
                <button type = 'submit' onClick = {iClickedTheDamnButton} className = 'loginButton'><Link to = '/interface'>Sign in</Link></button>
            </form>
        </div>
    </div>
)};

// export React component
export default Login;