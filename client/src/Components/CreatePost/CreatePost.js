import React, { useState } from 'react';
import axios from 'axios';
import M from 'materialize-css';
import "./CreatePost.css"

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')

    const postDetails = () => {
        var data = new FormData();
        data.append("file", image);
        data.append("upload_preset", 'insta_clone');
        data.append("cloud_name", 'ajaypathakkkk');
        axios.post('https://api.cloudinary.com/v1_1/ajaypathakkkk/image/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res)
            .then(data => {
                setUrl(data)
            })
            .catch(err => {
                console.log(err)
            })

            if (title && body && image) {
                console.log(`title ${title} body ${body} ${url}`)
                axios.post("http://localhost:5000/createpost", title, body, JSON.stringify(url))
                  .then(response => {
                    console.log("dataaaaaaaa",response)
                    if (response.data.error) {
                      M.toast({ html: response.data.error })
                    } else {
                      M.toast({ html: response.data.message })
                    }
                  }).catch((err) => {
                    console.log(err)
                  })
              }
              else {
                M.toast({ html: "please add all the field" })
            }

    }

    return (
        <div className='card input-field create-post-wrapper'>
            <input
                type='text'
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}

            />
            <input
                type='text'
                placeholder='body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />

            <div className="file-field input-field">
                <div className="btn waves-effect waves-light #64b5f6 blue">
                    <span >File</span>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>

            <button
                className='btn waves-effect waves-light #64b5f6 blue submit-btn'
                onClick={() => postDetails()}
            >
                Submit Post</button>

        </div>
    )
}

export default CreatePost