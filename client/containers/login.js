// import modules
import React, { useState, useRef } from 'react';
import { Link , useNavigate} from 'react-router-dom';




// define 'Login' React functional component using implicit return ()
const Login = props => {
     const navigate = useNavigate();
   
    const[loginInfo,setLoginInfo] = useState({email: 'hi', name: 'hello'});
    console.log('loginInfo',loginInfo);
    const emailRef = useRef();

    const passwordRef = useRef();

//      ___           _ _              _ _    _      _        
//     |   \ ___ _ _ ( ) |_  __ ____ _| (_)__| |__ _| |_ ___  
//     | |) / _ \ ' \|/|  _| \ V / _` | | / _` / _` |  _/ -_) 
//     |___/\___/_||_|  \__|  \_/\__,_|_|_\__,_\__,_|\__\___| 

//                 __             _                 _   _    __
//     ___ _ _    / _|_ _ ___ _ _| |_   ___ _ _  __| | (_)  / /
//    / _ \ ' \  |  _| '_/ _ \ ' \  _| / -_) ' \/ _` |  _  | | 
//    \___/_||_| |_| |_| \___/_||_\__| \___|_||_\__,_| (_) | | 
//                                                          \_\
                                                                                                                                          

    const iClickedTheDamnButton=(e)=>{
        e.preventDefault();
        console.log('clicked the damn button')
        const body = {email : emailRef.current.value, password : passwordRef.current.value}
        //make fetch request to username database via backend
        fetch('http://localhost:3000/api')
        .then((data)=>data.json())
        .then((parsedData)=>{
            let checkLogin = {}
            console.log('this is the user data from the backend')
            console.log(parsedData)
            //move username and password to temporary object
            let validated = false;
            for(let userEle of parsedData){
                console.log('current userEle: ')
                console.log(userEle)
                if (userEle['email'] === body.email && userEle['password']===body.password){
                    console.log('username found & password correct')
                    setLoginInfo({email: userEle['email'], name: userEle['name']})
                    console.log('loginInfo2', loginInfo)
                  validated = true;
                }
            }
            if (validated === true){
                console.log('email and password match')
                navigate('/interface');
            }else{
                console.log('either password does not match or user not found')
                alert('invalid login 🥲')
            }

            // first, check if the username is already present
           
        })
        
        console.log(body)
    }
 

    
    
    
    return(
    <div className = 'loginPage'>
        <div className = 'loginBox'>
            <div className = 'loginBoxHeader'>Login</div>
            <form onSubmit={iClickedTheDamnButton}>
                <input type = 'email' id = 'email' className = 'inputBox' placeholder = 'Your Email' ref = {emailRef}/>
                <input type = 'password' id = 'password' className = 'inputBox' placeholder = 'Your Password' ref = {passwordRef}/>
                <button type = 'submit' onClick = {iClickedTheDamnButton} className = 'loginButton'>Sign in</button>
            </form>
        </div>
    </div>
)};

// export React component
export default Login;