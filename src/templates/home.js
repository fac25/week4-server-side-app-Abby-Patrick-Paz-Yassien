const { Layout } = require("./layout.js");

// Home HTML
function homeHtml(login_url) {
  const title = "Check-in with us!";
  const content = /*html*/ `
      <div class="home-container">
        <h1>${title}</h1>
        <nav>
            <a href="/sign-up">Sign Up</a> 
            <a href="/log-in">Log In</a>
            <a href="${login_url}">Log in with GitHub</a>
        </nav>
        </div>
     `;
  return Layout({ title, content });
}
module.exports = { homeHtml };
