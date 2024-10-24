import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';


const Signup = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phno: "",
    password: "",
    role: "user"
  });
  const [emailError, setEmailError] = useState({ state: false, message: "" });
  const [passwordError, setPasswordError] = useState({ state: false, message: "" });
  const [phnoError, setPhnoError] = useState({ state: false, message: "" });
  const [nameError, setNameError] = useState({ state: false, message: "" });

  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;

    if (!/\S+@\S+\.\S+/.test(input.email)) {
      setEmailError({
        state: true,
        message: "Please enter a valid email address."
      });
      isValid = false;
    } else {
      setEmailError({ state: false, message: "" });
    }

    if (input.password.length < 8) {
      setPasswordError({
        state: true,
        message: "Password must be at least 8 characters long."
      });
      isValid = false;
    } else {
      setPasswordError({ state: false, message: "" });
    }

    if (isNaN(input.phno) || input.phno.length < 10) {
      setPhnoError({
        state: true,
        message: "Please enter a valid phone number."
      });
      isValid = false;
    } else {
      setPhnoError({ state: false, message: "" });
    }

    if (!input.firstname.trim()) {
      setNameError({
        state: true,
        message: "Please enter your first name."
      });
      isValid = false;
    } else {
      setNameError({ state: false, message: "" });
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidEntry = validateInputs();

    if (!isValidEntry) return;

    try {
      const signupData = {
        firstname: input.firstname,
        lastname: input.lastname,
        phno: input.phno,
        email: input.email,
        password: input.password,
        role: input.role
      };

      const response = await axios.post(
        'http://localhost:8000/api/user/signup',
        signupData,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );

      if (response.data.success) {
        navigate("/Login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const heading = { fontSize: "2rem", fontWeight: "600" };
  const paperStyle = {
    padding: "2rem",
    margin: "50px auto",
    borderRadius: "3rem",
    boxShadow: "1px 1px 1px 1px"  // Correct CSS for box shadow
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Grid align="center">
        <Paper
          style={paperStyle}
          sx={{
            width: {
              xs: "80vw",
              sm: "50vw",
              md: "35vw",
              lg: "25.5vw",
              xl: "20.5vw"
            },
            height: "auto"
          }}
        >
          <Typography style={heading}>Sign Up</Typography>
          <br />
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="First Name"
              id="firstname"
              name="firstname"
              value={input.firstname}
              error={nameError.state}
              helperText={nameError.message}
              onChange={handleChange}
              variant="filled"
              sx={{ width: "300px" }}
            />
            <br /><br />
            <TextField
              type="text"
              label="Last Name"
              id="lastname"
              name="lastname"
              value={input.lastname}
              onChange={handleChange}
              variant="filled"
              sx={{ width: "300px" }}
            />
            <br /><br />
            <TextField
              type="text"
              label="Email"
              id="email"
              name="email"
              error={emailError.state}
              helperText={emailError.message}
              value={input.email}
              onChange={handleChange}
              variant="filled"
              sx={{ width: "300px" }}
            />
            <br /><br />
            <TextField
              type="text"
              label="Phone Number"
              id="phno"
              name="phno"
              value={input.phno}
              error={phnoError.state}
              helperText={phnoError.message}
              onChange={handleChange}
              variant="filled"
              sx={{ width: "300px" }}
            />
            <br /><br />
            <TextField
              type="password"
              label="Password"
              id="password"
              name="password"
              value={input.password}
              error={passwordError.state}
              helperText={passwordError.message}
              onChange={handleChange}
              variant="filled"
              sx={{ width: "300px" }}
            />
            <br /><br />
            <Button variant="contained" type="submit" sx={{ width: "300px" }}>
              Sign Up
            </Button>
            <br /><br />
            <Link to="/Login">Already have an account? Login</Link>
            <br /><br />
            <Link to="/Home">
              <Button variant="contained" sx={{ width: "150px" }}>Back to Home</Button>
            </Link>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Signup;
