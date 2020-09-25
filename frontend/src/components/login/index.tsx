import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
/* Material-UI */
import { Button, TextField } from "@material-ui/core";
/* Components */
import Card from "../card";
/* CustomHooks */
import { useLogin } from "./useLogin";

function Login() {
  const { user, setUser, handleChange, sendData } = useLogin();
  return (
    <Card>
      <div className="formLogin">
        <div>
          <TextField
            className="email"
            label="Email"
            name="email"
            value={user.email}
            fullWidth={true}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <TextField
            label="Password"
            name="password"
            value={user.password}
            fullWidth={true}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Link to="/register">Registrate</Link>
        </div>
        <Button
          className="buttonLogin"
          variant="contained"
          color="primary"
          onClick={() => sendData()}
        >
          Send
        </Button>
      </div>
    </Card>
  );
}

export default Login;
