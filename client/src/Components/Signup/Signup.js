import React, { useState } from 'react';
import M from 'materialize-css';

import {
  Link, useHistory
} from 'react-router-dom'
import "../../App.css"

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, email, password)

  const postData = () => {
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        password,
        email
      })
    }).then(res => res.json())
      .then(data => {
        if(data.error){
          M.toast({html: data.error})
        }else{
          M.toast({html: data.message})
          history.push('/sign-in')
        }
      })
  }

  return (
    <div className='login my-card'>
      <div className='Card auth-card input-field'>
        <h2>Instagram</h2>

        <input
          type="text"
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className='btn waves-effect waves-light #64b5f6 lighten-2'
          onClick={() => { postData() }}
        >
          SignUp
        </button>
        <h6 className='form-bottom-link'><Link to="/sign-in">SignIn</Link></h6>
      </div>
    </div>
  )
}

export default Signup