// import modules
import React from 'react';

// define a 'Post' React functional component
const Post = props => (
    <div className = 'postContents'>
        <form>
            <input type = 'text' className = 'sm-input-box' placeholder = 'Company name'/>
            <input type = 'text' className = 'sm-input-box' placeholder = 'Role/position'/>
            <input type = 'text' className = 'med-input-box' placeholder = 'Challenges'/>
            <input type = 'text' className = 'med-input-box' placeholder = 'Technical Assessments'/>
            <input type = 'text' className = 'med-input-box' placeholder = 'Environment'/>
            <input type = 'text' className = 'lg-input-box' placeholder = 'Description of Interview'/>
            <input type = 'submit'/>
        </form>
    </div>
);

// export React component
export default Post;