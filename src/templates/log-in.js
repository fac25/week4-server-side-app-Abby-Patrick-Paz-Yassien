const { Layout } = require("./layout.js");

// Log in HTML

function logInHtml() {
    const title = "Log In";
    const content = /* html */ `
  
  <h1>${title}</h1>
  <form method="POST" action="/log-in">
    <label for="username">Username</label>
    <input name="username" type="text" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
    <button type="submit">log In</button>
  </form>
  `;
  
  return Layout ({title, content} );
  }

module.exports = { logInHtml }