// import modules
import React from 'react';
import { Link } from 'react-router-dom';

// define 'Login' React functional component using implicit return ()
const Login = props => (
    <div className = 'loginPage'>
        <div className = 'loginBox'>
            <div>Login</div>
            <form>
                <input type = 'email' className = 'inputBox' placeholder = 'Your Email'/>
                <input type = 'password' className = 'inputBox' placeholder = 'Your Password'/>
                <button type = 'submit' className = 'loginButton'><Link to = '/interface'>Sign in</Link></button>
            </form>
        </div>
    </div>
);

// export React component
export default Login;