import React from 'react';
import linkedInButton from '../assets/linkedin.png';

const Login = (props) => {
  
  return (
    <a href='https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=BuTaNiApKe&scope=r_liteprofile%20r_emailaddress&client_id=771umy96mu6r3z&redirect_uri=http%3A%2F%2Flocalhost%3A3000/auth'>
      <img src={linkedInButton} alt="Sign in with LinkedIn" />
    </a>
  );
};

export default Login;