const db = require("../database/db");

const create_user = db.prepare(/* sql */ `
INSERT INTO users (username, hash)
VALUES ($username, $hash)
RETURNING id`);

function createUser( {username, hash} ) {
  return create_user.get({ username, hash });
}

const select_user_by_username = db.prepare(/* sql*/ `
SELECT id, username, hash FROM users
WHERE username = ?  
`);

function getUserByUsername(username) {
  return select_user_by_username.get(username);
}


module.exports = { createUser, getUserByUsername }