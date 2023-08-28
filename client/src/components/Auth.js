import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";




const Auth = () => {
  const navigate = useNavigate();



  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });



  const [isSignup, setIsSignup] = useState(false);






  const handleChange = (event) => {
    setInputs((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };





  const sendRequest = async (type = "signin") => {
    const res = await axios
      .post(`${process.env.REACT_APP_LOCAL_HOST}/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };





  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => {
          dispatch(authActions.signin());
        })
        .then(() => {
          navigate("/");
        })
        .then((data) => console.log(data));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => {
          dispatch(authActions.signin());
        })
        .then(() => {
          navigate("/");
        })
        .then((data) => console.log(data));
    }
  };





  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={10}
        >
          <Typography variant="h3" padding={3} textAlign="center">
            {isSignup ? "Sign Up" : "Sign In"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              placeholder="Name"
              value={inputs.name}
              margin="normal"
            />
          )}
          <TextField
            name="email"
            onChange={handleChange}
            type={"email"}
            value={inputs.email}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            type={"password"}
            value={inputs.password}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            {isSignup ? "Create Account" : "Sign In"}
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 2 }}
            color="warning"
          >
            {isSignup ? "have an Account? Sign In" : "New User? Register Now"}
          </Button>
        </Box>
      </form>
    </div>
    // <>

    //   <div className="form-cont">
    //     <form onSubmit={(e) => { handleSubmit(e) }}>
    //       <div className="brand">
    //         {/* <img src={Logo} alt="" /> */}
    //         <h1>ConVene</h1>
    //       </div>
    //       <input type="text" name="username" placeholder="username" onChange={(e) => handleChange(e)} />
    //       <input type="text" name="email" placeholder="email" onChange={(e) => handleChange(e)} />
    //       <input type="password" name="password" placeholder="password" onChange={(e) => handleChange(e)} />
    //       <input type="password" name="confirmpassword" placeholder="confirm password" onChange={(e) => handleChange(e)} />
    //       <button type="submit" >create user</button>
    //       <span>already have an account ? <Link to="/login">login</Link></span>
    //     </form>
    //     {/* <ToastContainer /> */}
    //   </div>
    // </>
  );
};

export default Auth;