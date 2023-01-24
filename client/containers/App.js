import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import React containers
import Frontpage from './frontpage';
import Login from './login';
import Interface from './interface';
import Post from './post';
import Signup from './signup';


//react router absolutely fucks
const App = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Frontpage />}/>
                <Route path = "/login" element = {<Login />}/>
                <Route path = "/interface" element = {<Interface />}/>
                <Route path = "/post" element = {<Post />}/>
                <Route path = "/signup" element = {<Signup />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;