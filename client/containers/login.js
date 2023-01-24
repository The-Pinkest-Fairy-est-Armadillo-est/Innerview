// import modules
import React, { useState, useRef, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';




// define 'Login' React functional component using implicit return ()
const Login = props => {
    let validated = false;//necessity for this local variable explained below
    const navigate = useNavigate();
    //the following line shows the default schema of our vaidation state
    const[loginInfo,setLoginInfo] = useState({email: 'hi', name: 'hello', validated: false});
    console.log('loginInfo',loginInfo);
    const emailRef = useRef();
    const passwordRef = useRef();
//     ___            _                _ _     _       _       
//    /   \___  _ __ | |_  __   ____ _| (_) __| | __ _| |_ ___ 
//   / /\ / _ \| '_ \| __| \ \ / / _` | | |/ _` |/ _` | __/ _ \
//  / /_// (_) | | | | |_   \ V / (_| | | | (_| | (_| | ||  __/
// /___,' \___/|_| |_|\__|   \_/ \__,_|_|_|\__,_|\__,_|\__\___|
                                                            
//                 __                 _                    _        __
//   ___  _ __    / _|_ __ ___  _ __ | |_    ___ _ __   __| |  _   / /
//  / _ \| '_ \  | |_| '__/ _ \| '_ \| __|  / _ \ '_ \ / _` | (_) | | 
// | (_) | | | | |  _| | | (_) | | | | |_  |  __/ | | | (_| |  _  | | 
//  \___/|_| |_| |_| |_|  \___/|_| |_|\__|  \___|_| |_|\__,_| (_) | | 
//                                                                 \_\
//This is a bad thing that we did
//most of the time nobody looks at our code after we write it
//it works but its insecure
//-brach                                                                     

    const iClickedTheDamnButton=(e)=>{
        e.preventDefault();
        const body = {email : emailRef.current.value, password : passwordRef.current.value}
        //make fetch request to username database via backend
        fetch('http://localhost:3000/api')
        .then((data)=>data.json())
        .then((parsedData)=>{
            for(let userEle of parsedData){
                //loop through each user in the db
                //for each one, check to see if the email/password match on that user's info
                if (userEle['email'] === body.email && userEle['password']===body.password){
                    //found a match. update local variable 'validated' as well as state
                    validated = true;
                    //why have a local variable hold validation if we're keeping it in state?
                    //The state will not update until the component is re-rendered.
                    //but we need to do something with that info BEFORE it re-renders.
                    //we will listen for this rerender in the useEffect hook outside of this promise chain
                    setLoginInfo({email: userEle['email'], name: userEle['name'], validated: true})
                }
            }//end of for loop
            //We've seen all the users
            //success handled in useEffect below
            //failure handled here. Note: state has not yet updated, hence the need for local 'validated'
            if (validated !== true){
                alert('invalid login 🥲')
            }
    })}
 
    //when useEffect is called, will check the state to see if we've been vaidated.
    //if so, redirect to the /interface page
    useEffect(()=> {
        console.log('login use effect', loginInfo, validated)
         if(loginInfo.validated) navigate('/interface', {state:loginInfo})
    })
    
    
    return(
    <div className = 'loginPage'>
        <div className = 'loginBox'>
            <h1>Login</h1>
            {/* the onSubmit is an html element of <form> */}
            {/* I do not know how it works. but it's our click handler */}
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
                {/* button type = submit has something to do with the onSubmit html attribute */}
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