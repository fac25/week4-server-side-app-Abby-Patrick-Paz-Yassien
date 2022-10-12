const server = require("../src/server")
// const db = require("../src/database/db")

async function request(pathname, options = {}) {
  const app = server.listen(0)
  const { port } = app.address()
  const url = new URL(pathname, `http://localhost:${port}`)
  const response = await fetch(url, options)
  app.close()
  const body = await response.text()
  const headers = Object.fromEntries(response.headers)
  return { status: response.status, body, headers }
}

// function reset() {
//   db.exec(/*sql*/ `
//     PRAGMA foreign_keys = 0;
//     DELETE FROM users;
//     DELETE FROM sessions;
//     DELETE FROM questions;
//     DELETE FROM sqlite_sequence WHERE name IN ('questions', 'sessions', 'users');
//     PRAGMA foreign_keys = 1;
//     `)
// }

module.exports = { request }
