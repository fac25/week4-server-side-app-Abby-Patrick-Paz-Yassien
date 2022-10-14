const { Layout } = require("./layout.js");
const { validate } = require("../utils.js");

// Log in HTML

function logInHtml(errors = {}, username = '') {
  const title = "Log In";
  console.log(username)
  const content = /* html */ `
    <div class="login-container">
  <h1>${title}</h1>
  <form method="POST" action="/log-in" class="log-in-form">
    <label for="username">Username</label>
    ${validate(errors.username)}
    <input name="username" type="text" value="${username}"/>
    <label for="password">Password</label>
    ${validate(errors.password)}
    <input type="password" name="password" id="password" />
    <button type="submit">log In</button>
  </form>
  </div>
  `;

  return Layout({ title, content });
}

module.exports = { logInHtml }