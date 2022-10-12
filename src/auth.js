const server = require('./server')
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://check-in-questions.herokuapp.com',
  clientID: 'UIoeOMAUYZFfTEHireTnbQbOUpvQkhaW',
  issuerBaseURL: 'https://dev-j35jb87x.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
server.use(auth(config));

// req.isAuthenticated is provided from the auth router
server.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
