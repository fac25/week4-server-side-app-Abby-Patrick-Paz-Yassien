const { getToken, getUser } = require("../auth");
const { createUser, getUserByUsername } = require("../model/users");
const { createCookie } = require("../utils");
const bcrypt = require("bcryptjs");

function get (req, res) {
    
    const code = req.query.code;
    getToken(code)
      .then(getUser)
      .then((user) => {
        // Exit function if user exists
        const dbUser = getUserByUsername(user.login);
        if (dbUser) {
          return createCookie(res, dbUser);
        }
  
        bcrypt.hash(code, 12).then((hash) => {
          //returns an id for that user
          const newUser = createUser({ username: user.login, hash });
          createCookie(res, newUser);
        });
      });
  }

module.exports = {get}