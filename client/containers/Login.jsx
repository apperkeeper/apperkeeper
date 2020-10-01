import React from 'react';
import linkedInButton from '../assets/linkedin.png';

const Login = (props) => {
  
  return (
    <a href={process.env.LINKEDIN_OAUTH_URI}>
      <img src={linkedInButton} alt="Sign in with LinkedIn" />
    </a>
  );
};

export default Login;