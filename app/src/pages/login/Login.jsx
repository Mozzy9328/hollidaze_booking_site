import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../login/Login.css"

function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Login() {
    const user = {
      email,
      password,
    }
  }

  return (

    <div className='login-container'>
            <h2>Login</h2>
            <input type="text" placeholder='email'
              value={email} onChange={(e) => { setEmail(e.target.value) }} />
              <br />
            <input type="password"placeholder='password'
              value={password} onChange={(e) => { setPassword(e.target.value) }} />
              <br />
            <Link to="/#"><button onClick={Login}>Login</button> </Link>
          </div>

  )
}

export default Loginscreen;