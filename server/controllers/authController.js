const fetch = require('node-fetch');
const authController = {};

/**
 * getToken receives redirect from LinkedIn's OAuth server, grabs the authorization token, 
 * exchanges it for an access token, uses that access token to retrieve the user's name and
 * LinkedIn id (which will be used to uniquely identify the user throughout the app), and 
 * redirects to the homepage with a cookie containing name and id. 
 */
authController.getToken = (req, res, next) => {
  // store authorization token sent by OAuth server
  const requestToken = req.query.code;
  console.log('requestToken',requestToken)
  
  // construct request to exchange authorization token for access token.
  // for further information, consult LinkedIn's docs: 
  // https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow
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

  // make request for access token
  fetch(authorizationURI, fetchOptions)
    .then((response) => response.json())
    .then((parsed) => {
      // store access token and token expiration
      const accessToken = parsed.access_token;
      const expiration = parsed.expires_in;
      
      // construct request for LinkedIn member profile
      const fetchOptions = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };

      // make request for member profile
      fetch('https://api.linkedin.com/v2/me', fetchOptions)
        .then((response) => response.json())
        .then((parsed) => {
          // store LinkedIn unique ID and user's first name from profile
          const { id, localizedFirstName } = parsed;
          console.log('id from ',id)
          
          // set cookies matching access token's expiration
          res.cookie("token", id, { maxAge: expiration })
          res.cookie("name", localizedFirstName, { maxAge: expiration });
          
          return next();
        })
        .catch((error) => {
          return next(error);
        });
    })
    .catch((error) => {
      return next(error);
    });
};

authController.checkCookie = (req, res, next) => {
  const { token } = req.cookies;
  console.log(token, "token from cookie check ")
  console.log(req.cookies, "token from cookie check ")

  if (token) return next();
  return res.redirect('/signin');
  // try {
  //   if ( token ) {
  //     console.log('hello')
  //     return next();
  //   }
  // } catch (err) {
  //   res.json('id doesnt match');
  //   console.log(`id doesnt match : ${err}`)
  // }
}

module.exports = authController;