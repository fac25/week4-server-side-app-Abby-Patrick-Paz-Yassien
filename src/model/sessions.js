const db = require("../database/db");
const crypto = require("node:crypto");

const create_session = db.prepare(/*sql*/ `
  INSERT INTO sessions (id, user_id, expires_at)
  VALUES ($sid, $user_id, DATE('now', '+7 days'))
`); 

//id here is the session id
function createSession(user_id) {
  const sid = crypto.randomBytes(18).toString("base64");
  create_session.run({ sid, user_id });
  return sid;
}

const select_session = db.prepare(/*sql*/ `
  SELECT id, user_id, expires_at
  FROM sessions WHERE id = ?
`);

function getSession(sid) {
  return select_session.get(sid);
}

const remove_session = db.prepare(/*sql*/ `
DELETE FROM sessions
WHERE id = ?
`)

function removeSession(sid) {
  return remove_session.run(sid);
}

module.exports = { createSession, getSession, removeSession };