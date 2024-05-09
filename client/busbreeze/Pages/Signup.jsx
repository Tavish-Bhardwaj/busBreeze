import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Signup({ toggle }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  function handleChange(e) {
    console.log(user);
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  // handle submit
  const handleSubmit = async () => {
   
    console.log(user);
    // Simulate sending form data to an API endpoint
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data=="created") {
          navigate("/");
        } else if(data=="not"){
          navigate("/");
        }else{
          navigate("/signup");
          window.location.reload();
        }
        
      });
  };
  return (
   
   
   <div className="logsign">
      <div className="container">
        <div className="inputs">
          <h1>Sign Up</h1>
          <input type="text" placeholder="Name" name="name" onChange={handleChange} />
          <input type="email" placeholder="Email" name="email" onChange={handleChange} />
          <input type="number" placeholder="Phone No." name="contactNo" onChange={handleChange}/>
          <input type="password" placeholder="Password"name="password" onChange={handleChange}/>
          <button onClick={handleSubmit}>Sign Up</button>
          <button ><NavLink to="/login">Log In</NavLink></button>

        </div>
      </div>
    
   </div>
   
          
  )
}


