const { Layout } = require("./layout.js");

// Sign-up HTML
function signUpHtml() {
    const title = "Create your account";
    const content = /*html*/ `
      
      <h1>${title}</h1>
      <form method="POST">

      <label for="username">username</label>
      <input id="username" name="username" type="text" />
      
      <label for="password">password</label>
      <input id="password" name="password" type="password" />
      
      <button>Submit</button>
    </form>
    `;
  
  return Layout({title, content});
}

module.exports = { signUpHtml };