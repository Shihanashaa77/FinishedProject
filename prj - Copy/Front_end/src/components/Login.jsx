import { useState } from 'react';
import { Button, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from "../redux/authSlice.js"


const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "user"
  });
  const [emailError, setEmailError] = useState({ state: false, message: "" });
  const [passwordError, setPasswordError] = useState({ state: false, message: "" });
  const navigate = useNavigate();
  const { loading, user } = useSelector(store => store.auth)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError({
        state: true,
        message: "Please enter a valid email address.",
      });
      isValid = false;
    } else {
      setEmailError({ state: false, message: "" });
    }

    if (!password.value || password.value.length < 8) {
      setPasswordError({
        state: true,
        message: "Password must be at least 8 characters long.",
      });
      isValid = false;
    } else {
      setPasswordError({ state: false, message: "" });
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      dispatch(setLoading(true));
      const loginData = {
        email: input.email,
        password: input.password,
        role: input.role,
      };
      const response = await axios.post(
        'http://localhost:8000/api/user/login',
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const isValidEntry = validateInputs();

      if (response.data.success && isValidEntry) {
        dispatch(setUser(response.data.user));
        if (loginData.role == "admin") navigate("/Adminhome");
        else navigate("/Dashboard");
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const heading = { fontSize: "2rem", fontWeight: "600" };
  const paperStyle = {
    padding: "2rem",
    margin: "50px auto",
    borderRadius: "3rem",
    boxShadow: "1px 1px 1px 1px"  // Correct property name
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Grid align="center">
        <br></br>
        <Paper
          style={paperStyle}
          sx={{
            width: {
              xs: "30vw",
              sm: "25vw",
              md: "35vw",
              lg: "23.5vw",
              xl: "20.5vw"
            },
            height: "70vh"
          }}
        >
          <Typography style={heading}>Login</Typography>
          <br />
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Email"
              id='email'
              error={emailError.state}
              helperText={emailError.message}
              name="email"  // Name should be set for onChange to work
              value={input.email}
              onChange={handleChange}
              variant="filled"
              sx={{ width: "300px" }}
            />
            <br /><br />
            <TextField
              type="password"
              label="Password"
              id='password'
              error={passwordError.state}
              helperText={passwordError.message}
              name="password"  // Name should be set for onChange to work
              value={input.password}
              onChange={handleChange}
              variant='filled'
              sx={{ width: "300px" }}
            />
            <br /><br />
            <FormControl sx={{ textAlign: "left" }}>
              <label htmlFor='role'><h2>Role:</h2></label>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                defaultValue="user"
                id="role"
                name="role"  // Ensure name matches the input
                value={input.role}
                onChange={handleChange}
              >
                <FormControlLabel value="user" control={<Radio checked={input.role === 'user'} />} label="User" />
                <FormControlLabel value="admin" control={<Radio checked={input.role === 'admin'} />} label="Admin" />
              </RadioGroup>
            </FormControl>
            <Button variant='contained' type="submit" sx={{ width: "300px" }}>Log in</Button>
            <br /><br /><br />
            <Link to='/Signup'>
              Don't have an account? Signup
            </Link>
            <br /><br /><br />
            <Link to="/Home">
              <Button variant='contained' sx={{ width: "150px" }}>Back to Home</Button>
            </Link>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;