import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FoodLogo from "../../logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <div>
            <img src={FoodLogo} alt="logo" />
          </div>
          <Typography variant="h6"></Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
