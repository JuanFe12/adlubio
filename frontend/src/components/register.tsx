import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

/* Services */
import { authenticationRegister } from "../services/authentication.service";

/* Interfaces */
import { UserInteface } from "../interfaces/user.interface";
/* Material-UI */
import { Button, TextField } from "@material-ui/core";

var url = "http://localhost:4848/user";

function Register() {
  const [user, setUser] = useState<UserInteface>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async() => {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  return (
    <div>
      <div>
        <TextField
          label="firstName"
          name="firstName"
          value={user.firstName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <TextField
          label="lastName"
          name="lastName"
          value={user.lastName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <TextField
          label="email"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <TextField
          label="password"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <Link to="/">
        <Button
          variant="contained"
          type="button"
          color="primary"
          onClick={() => sendData()}
        >
          Send
        </Button>
      </Link>
    </div>
  );
}

export default Register;
