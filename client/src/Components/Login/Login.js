import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login my-card'>
      <div className='Card auth-card input-field'>
        <h2>Instagram</h2>

        <input
          type="email"
          placeholder='email'
        />
        <input
          type="password"
          placeholder='password'
        />

        <button className='btn waves-effect waves-light #64b5f6 lighten-2'>Login</button>
        <h6  className='form-bottom-link'><Link to="/sign-up">SignUp</Link></h6>
      </div>
    </div>
  )
}

export default Login