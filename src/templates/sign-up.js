const { Layout } = require("./layout.js");
const { validate } = require("../utils.js");

// Sign-up HTML
function signUpHtml(errors = {}) {
  const title = "Create your account";
  const content = /*html*/ `
    <div class="signup-container">
      <h1>${title}</h1>
      <form method="POST" class="sign-up-form">

      <label for="username">Username</label>
      ${validate(errors.username)}
      <input id="username" name="username" type="text" />
      
      <label for="password">Password</label>
      ${validate(errors.password)}
      <input id="password" name="password" type="password" />
      
      <button>Submit</button>
    </form>
    </div>
    `;

  return Layout({ title, content });
}

module.exports = { signUpHtml };