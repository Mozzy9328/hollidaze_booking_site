import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "../register/Register.css"

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    async function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword,
            }
            try {
                const result = await axios.post("/api/users/register", user).data;

            } catch (error) {
                console.log(error);
            }
        }
        else {
            alert("Password not match");
        }
    }

    return (
        <div className='register-container'>
            
                        <h2>Register</h2>
                        <input type="text" placeholder='name'
                            value={name} onChange={(e) => { setName(e.target.value) }} />
                            <br />
                        <input type="text" placeholder='email'
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />
                             <br />
                        <input type="password" placeholder='password'
                            value={password} onChange={(e) => { setPassword(e.target.value) }} />
                             <br />
                        <input type="password" placeholder='confirm password'
                            value={cpassword} onChange={(e) => { setCPassword(e.target.value) }} />
                             <br />
                      <Link to="/#"> <button onClick={register}>Register</button> </Link> 

        </div>
    )
}

export default Register;