import React, { useState } from 'react';
import axios from "axios";
import M from 'materialize-css';

import {
  Link, useHistory
} from 'react-router-dom'
import "../../App.css"
import "./Signup.css"

const Signup = () => {
  const history = useHistory();

  const intialValue = {
    name: "",
    email: "",
    password: ""
  }

  const [userValue, setUserValue] = useState(intialValue)
  const [passwordShown, setPasswordShown] = useState(false)


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // console.log(name, email, password)

  // const postData = () => {
  //   fetch("http://localhost:5000/signup", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name,
  //       password,
  //       email
  //     })
  //   }).then(res => res.json())
  //     .then(data => {
  //       if (data.error) {
  //         M.toast({ html: data.error })
  //       } else {
  //         M.toast({ html: data.message })
  //         history.push('/sign-in')
  //       }
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  // }

  const handleChange = e => {

    const { name, value } = e.target
    // console.log(name, value);
    setUserValue({
      ...userValue,
      [name]: value
    })
  }

  const register = (e) => {
    e.preventDefault()
    const { name, email, password } = userValue
    if (name && email && password) {
      axios.post("http://localhost:5000/signup", userValue)
        .then(response => {
          console.log("dataaaaaaaa",response)
          if (response.data.error) {
            M.toast({ html: response.data.error })
          } else {
            M.toast({ html: response.data.message })
            history.push('/sign-in')
          }
        }).catch((err) => {
          console.log(err)
        })
    }
    else {
      M.toast({ html: "please add all the field" })
  }
  }

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div className='sign-up my-card'>
      <div className='Card auth-card input-field'>
        <h2>Instagram</h2>

        <input
          type="text"
          placeholder='name'
          autoComplete="new-password"
          name="name"
          value={userValue.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder='email'
          autoComplete="new-password"
          name="email"
          value={userValue.email}
          onChange={handleChange}
        />
        <div className='password-wrapper' >
          <input
            type={passwordShown ? "text" : "password"}
            placeholder='password'
            autoComplete="new-password"
            name="password"
            value={userValue.password}
            onChange={handleChange}

          />
          <button onClick={togglePassword} className="password-visible" >
            <i class="material-icons">remove_red_eye</i>
          </button>
        </div>


        <button
          className='btn waves-effect waves-light #64b5f6 lighten-2'
          onClick={register}
        >
          SignUp
        </button>
        <h6 className='form-bottom-link'><Link to="/sign-in">SignIn</Link></h6>
      </div>
    </div>
  )
}

export default Signup