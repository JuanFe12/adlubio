import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useRegister } from "./useRegister";

import { Button, TextField } from "@material-ui/core";
import Card from "../card";

function Register() {
  const { user, handleChange, sendData } = useRegister();

  return (
    <Card>
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
    </Card>
  );
}

export default Register;
