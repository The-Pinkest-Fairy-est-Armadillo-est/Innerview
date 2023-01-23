// import modules
import React from 'react';
import Navbar from '../components/navbar';

// define 'Frontpage' React functional component using explicit return {}
const Frontpage = props => {
    return (
        <div className = 'full-fp'>
            <Navbar />
            <div className="img-container">
                <img className ="mainimg" src="https://media.istockphoto.com/id/1159531985/photo/close-up-interviewer-interview-candidate-apply-for-job-at-meeting-room-in-office.jpg?s=612x612&w=0&k=20&c=_9OcLGXHbtUatH9wVDhlj_dQ8wUGXja1BfMjT2NFZvY=" />
            </div>
        </div>
    )
};

// export React component
export default Frontpage;