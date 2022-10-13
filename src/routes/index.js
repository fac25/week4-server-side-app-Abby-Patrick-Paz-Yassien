const home = require("./home.js");
const logIn = require("./log-in.js");
const signUp = require("./sign-up.js");
const submitQuestion = require("./submit-questions.js");
const searchQuestion = require("./search-questions.js");
const logOut = require("./log-out.js");
const authenticate = require("./authenticate.js");
const missing = require("./missing-routes.js");

module.exports = {
  home,
  logIn,
  signUp,
  submitQuestion,
  searchQuestion,
  logOut,
  authenticate,
  missing,
};
