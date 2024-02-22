import React from 'react';
import { Link } from "react-router-dom";
import "./styles.css";
const Login = () => {
  
  

  return (
    <div className='signup-component'>
      <div className='left-content'></div>
      <div className='right-content'>
      <form>
        <label>
          Username
         
        </label>
         <input type="text" name="username"  />
        <label>
          Password
         
        </label>
         <input type="password" name="password"  />
        <button type="submit">Login</button>
      </form>
      <div>
      <span className="loginForgot">Forgot Password?</span>
      <div className="bot_sign"><div>Don`t have an account?</div><Link to="/signup" className="botlink">SignUp</Link>  </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
