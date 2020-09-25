import React, { useState } from "react";
/* Material-UI */
import { Button, TextField } from "@material-ui/core";
/* Components */
import Card from "../../card";

function SearchMenu() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <TextField
        label="Search...."
        value={searchText}
        fullWidth={true}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default SearchMenu;
