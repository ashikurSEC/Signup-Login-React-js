import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
      </div>

      <div className="inputs">
        {action==='Login'?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Enter Your User Name" />
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Enter Your Email Address" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Enter Your Password" />
        </div>

       {
       action==='Sign Up'?<div></div>: <div className="forgot-password">
          Lost Password? <span>Click here!</span>
        </div>
        }
        <div className="submit-container">
          <div className={action==='Login'?'submit gray': 'submit'} onClick={()=>setAction('Sign Up')}>Sign Up</div>
          <div className={action==='Sign Up'?'submit gray': 'submit'} onClick={()=>setAction('Login')}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
