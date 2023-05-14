import React from 'react';
import classes from './Login.module.css';
const Login = () => {
  return (
    <div className={classes.LoginWrapper}>
      <div>
        <h2>Login Form</h2>
        <form>
          <input type='text' id='email' name='email' placeholder='Email' />{' '}
          <br />
          <br />
          <input
            type='text'
            id='password'
            name='password'
            placeholder='Password'
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
