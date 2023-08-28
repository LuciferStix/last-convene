import React from 'react';
import './Lstyles.css'; 
import bg1 from '../assets/bg1.jpg'

import {useNavigate,Link} from 'react-router-dom'


import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";



const Register = () => {

  const [isSignup, setIsSignup] = useState(false);

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });




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
    <div className="container">
       
        <img
        src={bg1} alt="Graphics Image" />
      
      <div className="login">
        <h3 className="title">User Register</h3>


        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input type="text" placeholder="Username" onChange={handleChange}/>
        </div>


        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="email" placeholder="email" onChange={handleChange}/>
        </div>


        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Password" onChange={handleChange}/>
        </div>


        <button className="login-btn" onClick={handleSubmit}>Register</button>

        <div className="create">
          <span><Link to='/auth/login'>Login to account</Link></span>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default Register;
