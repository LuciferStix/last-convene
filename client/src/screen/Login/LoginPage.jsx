import React from 'react';
import './Lstyles.css'; 
import bg1 from '../assets/bg1.jpg'
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div className="container">
       
        <img
        src={bg1} alt="Graphics Image" />
      
      <div className="login">
        <h3 className="title">User Login</h3>


        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input type="text" placeholder="Username" />
        </div>


        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Password" />
        </div>

        
        <button className="login-btn">LOGIN</button>

        <div className="create">
          <span><Link to='/auth/register'>Create a new account</Link></span>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
