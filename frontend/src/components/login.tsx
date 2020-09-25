import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../styles/login/login.css';

var url = 'http://localhost:4848/user';


function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = () => {

    fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user }) 
      // body data type must match "Content-Type" header
    })
    .then(Response => Response.json())
    console.log(user)
  };
  return (
    
        <div className = "formLogin">
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>

            <div>
                <TextField
                className = "email"
                label="Email"
                name="email"
                value={user.email}
                onChange={(e) => handleChange(e)}
                />
            </div>
            <div>
                <TextField
                label="Password"
                name="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
                />
            </div>
            <div>
                <Link to = "/register" >
                    Registrate
                </Link>
            </div>
            <Button className="buttonLogin" variant="contained" color="primary" onClick={() => sendData()}>
                Send
            </Button>
        </div>
    
    
  );
}

export default Login;