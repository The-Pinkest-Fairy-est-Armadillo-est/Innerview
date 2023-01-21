// import modules
import React from 'react';
import Navbar from '../components/navbar';
import FB_Body from '../components/fb-body';

// define 'Frontpage' React functional component using explicit return {}
const Frontpage = props => {
    return (
        <div className = 'full-fp'>
            <Navbar />
            <FB_Body />
        </div>
    )
};

// export React component
export default Frontpage;