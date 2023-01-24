// import modules
import React, { useState, useRef, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';




// define 'Login' React functional component using implicit return ()
const Login = props => {
    var validated = false;
    const navigate = useNavigate();
    const[loginInfo,setLoginInfo] = useState({email: 'hi', name: 'hello', validated: false});
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
//-brach                                                                     

    const iClickedTheDamnButton=(e)=>{
        let tempUserInfo = {};
        e.preventDefault();
        console.log('clicked the damn button')
        const body = {email : emailRef.current.value, password : passwordRef.current.value}
        //make fetch request to username database via backend
        fetch('http://localhost:3000/api')
        .then((data)=>data.json())
        .then((parsedData)=>{
            let checkLogin = {}
            //move username and password to temporary object
           validated = false;
            for(let userEle of parsedData){
                if (userEle['email'] === body.email && userEle['password']===body.password){
                    tempUserInfo = {email: userEle['email'], name: userEle['name']}
                    console.log(tempUserInfo);
                    setLoginInfo({email: userEle['email'], name: userEle['name'], validated: true})
                    console.log('tempUserInfo', tempUserInfo)
                    console.log('loginInfo2', loginInfo)
                    
                    validated = true;
                    console.log(validated)
                    
                }
            }
            if (validated === true){
                console.log('email and password match')
                // navigate('/interface', {state:loginInfo});
            }else{
                console.log('either password does not match or user not found')
                alert('invalid login 🥲')
            }

            // first, check if the username is already present
           
        }).then(()=>validated ===true)
        
        console.log(body)
    }
 

    useEffect(()=> {
        console.log('login use effect', loginInfo, validated)
         if(loginInfo.validated) navigate('/interface', {state:loginInfo})

    }, [loginInfo])
    
    
    return(
    <div className = 'loginPage'>
        <div className = 'loginBox'>
            <h1>Login</h1>
            <form className = 'postContents' onSubmit={iClickedTheDamnButton}>
                <label 
                    htmlFor='Email'
                >Email: 
                </label>
                <input type = 'email' id = 'email' className = 'inputBox' placeholder = 'Your Email' ref = {emailRef}/>
                <label 
                    htmlFor='Password'
                    className = 'input-line'
                >Password: 
                </label>
                <input type = 'password' id = 'password' className = 'inputBox' placeholder = 'Your Password' ref = {passwordRef}/>
                <button type = 'submit' onClick = {iClickedTheDamnButton} className = 'signUpButton input-line'>Sign in</button>
                <Link to = '/signup'><button 
                        type='button' 
                        className='signUpButton input-line'
                    >
                        Sign up
                    </button></Link>
                <Link to = '/'><button 
                        type='button' 
                        className='signUpButton input-line'
                    >
                        Return home
                    </button></Link>
            </form>
        </div>
    </div>
)};

// export React component
export default Login;