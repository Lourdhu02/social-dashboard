import React from 'react';

import './styles.css';

const Signup = () => {
  

 

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
          Email
        </label>
        <input type="email" name="email"  />
        
        <label>
          Password
        </label>
        <input type="password" name="password" />
        
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
