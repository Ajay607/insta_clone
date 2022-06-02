import React from 'react';
import "./CreatePost.css"

const CreatePost = () => {
    return (
        <div className='card input-field create-post-wrapper'>
            <input type='text' placeholder='title' />
            <input type='text' placeholder='body' />
            <input type='text' placeholder='body' />

            <div className="file-field input-field">
                <div className="btn waves-effect waves-light #64b5f6 blue">
                    <span >File</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>

            <div className='btn waves-effect waves-light #64b5f6 blue submit-btn'>Submit Post</div>

        </div>
    )
}

export default CreatePost