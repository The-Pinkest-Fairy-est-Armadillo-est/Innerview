// import modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';




// define 'Login' React functional component using implicit return ()
const Login = props => {
    const[loginInfo,setLoginInfo] = useState({email: null, password: null});
 
    const iClickedTheDamnButton=()=>{
        console.log('clicked the damn button')
        setLoginInfo({email: 'testEmail', password: 'testPassword'})
        console.log(loginInfo)
    }
 

    
    
    
    return(
    <div className = 'loginPage'>
        <div className = 'loginBox'>
            <div>Login</div>
            <form>
                <input type = 'email' id = 'email' className = 'inputBox' placeholder = 'Your Email'/>
                <input type = 'password' id = 'password' className = 'inputBox' placeholder = 'Your Password'/>
                <button type = 'submit' onClick = {iClickedTheDamnButton} className = 'loginButton'><Link to = '/interface'>Sign in</Link></button>
            </form>
        </div>
    </div>
)};

// export React component
export default Login;