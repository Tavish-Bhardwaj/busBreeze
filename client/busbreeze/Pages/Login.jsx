import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'
import "./logsign.css"

export default function Login({ toggle }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  function handleChange(e) {
   // console.log(user);
   console.log(e.target.name,e.target.value);
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }


  //handle submit
  const handleSubmit = async () => {
   
    console.log(user);
    // Simulate sending form data to an API endpoint
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data!="not") {
          navigate("/");
        } else {
          navigate("/login");
          window.location.reload();
        }
        
      });
  };

  return (
    <div className='logsign'>
      <div className="container">
        <div className="inputs">
          <h1>Log In</h1>
          <input type="email" placeholder="Email" name='email' onChange={handleChange} />
          <input type="password" placeholder="Password" name='password' onChange={handleChange} />
          <button onClick={handleSubmit}>Log In</button>
          <button><NavLink to="/signup">Sign Up</NavLink></button>
        </div>
      </div>
    </div>
  )
}


