const { response } = require('express');
const fetch = require('node-fetch');

module.exports = {
  getToken: (req, res, next) => {
    const requestToken = req.query.code;
    
    const authorizationURI = `https://www.linkedin.com/oauth/v2/accessToken?` + new URLSearchParams({
      grant_type: 'authorization_code',
      code: requestToken,
      redirect_uri: 'http://localhost:3000/auth',
      client_id: process.env.LINKEDIN_CLIENT_ID,
      client_secret: process.env.LINKEDIN_SECRET,
    });
    
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Host': 'www.linkedin.com',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    fetch(authorizationURI, fetchOptions)
      .then((response) => response.json())
      .then((parsed) => {
        const accessToken = parsed.access_token;
        const expiration = parsed.expires_in;
        
        const fetchOptions = {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        };

        fetch('https://api.linkedin.com/v2/me', fetchOptions)
          .then((response) => response.json())
          .then((parsed) => {
            const { id, localizedFirstName,  } = parsed;
            res.cookie("token", id, { maxAge: expiration })
            res.cookie("name", localizedFirstName, { maxAge: expiration });
            
            return next();
          })
          .catch((error) => {
            return next(error);
          });
      });
  },
};