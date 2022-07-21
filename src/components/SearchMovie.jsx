import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchMovie = (props) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <TextField
        label="Search Movie"
        id="fullWidth"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        size="small"
        style={{ width: "90%" }}
      />
      &nbsp;&nbsp;
      <Button
        size="large"
        variant="contained"
        color="success"
        onClick={(event) => props.onClick(value)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchMovie;
