import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";
import { signOutFromApp } from "../authentication/firebase";

import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = (props) => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    await signOutFromApp();
    navigate("/");
  };

  const [user] = useAuthState(auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/Logo.png`}
              alt="Logo Movie"
            />
          </Box>
          <Box>
            <Button color="inherit" href="/">
              HOME
            </Button>
            <Button color="inherit" href="/search">
              SEARCH
            </Button>
            {user ? (
              ""
            ) : (
              <Button color="inherit" href="/login">
                LOGIN
              </Button>
            )}
            {user ? (
              <Button color="inherit" href="/profile">
                PROFILE
              </Button>
            ) : (
              ""
            )}
            {user ? <Button color="inherit">{user.email}</Button> : ""}
            {user ? (
              <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
                Logout
              </Button>
            ) : (
              ""
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
