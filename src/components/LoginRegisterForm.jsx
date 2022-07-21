import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  auth,
  loginWithGoogle,
  loginWithEmailPassword,
  registerWithEmailPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="#">
        React Web App Movie - 09
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const LoginRegisterForm = ({ loginRegister }) => {
  const navigate = useNavigate();

  const [user, isLoading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginWithEmailPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerWithEmailPassword(credential.email, credential.password);
  };

  const loginGoogleHandler = () => {
    loginWithGoogle(credential.accessToken, credential.user);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  const buttonLoginGoogleOrRegisterOnClickHandler = () => {
    loginGoogleHandler();
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (user) {
      navigate("/profile");
    }
  }, [user, isLoading, navigate]);

  return (
    <>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", width: 56, height: 56 }}
          src={`${process.env.PUBLIC_URL}/assets/img/Logo.png`}
          alt="Logo Movie"
        />
        <Typography component="h1" variant="h5">
          {loginRegister === "login" ? "Login Page" : "Register Page"}
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={credential.email}
            onChange={textFieldEmailOnChangeHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={credential.password}
            onChange={textFieldPasswordOnChangeHandler}
          />
          {loginRegister === "login" ? (
            <Button
              fullWidth
              size="large"
              variant="contained"
              onClick={buttonLoginOrRegisterOnClickHandler}
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          ) : (
            <Button
              fullWidth
              size="large"
              variant="contained"
              onClick={buttonLoginOrRegisterOnClickHandler}
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          )}

          <Button
            fullWidth
            size="large"
            color="error"
            variant="contained"
            onClick={buttonLoginGoogleOrRegisterOnClickHandler}
            sx={{ mt: 1, mb: 2 }}
          >
            Google
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/">
                <Typography variant="body1">Home</Typography>
              </Link>
            </Grid>
            <Grid item>
              {loginRegister === "login" ? (
                <Link to="/register">
                  <Typography variant="body1">Register ?</Typography>
                </Link>
              ) : (
                <Link to="/login">
                  <Typography variant="body1">Login ?</Typography>
                </Link>
              )}
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </>
  );
};

export default LoginRegisterForm;
