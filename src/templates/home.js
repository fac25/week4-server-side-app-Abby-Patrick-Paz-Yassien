const { Layout } = require("./layout.js");

// Home HTML
function homeHtml() {
  const title = "Check-in with us!";
  const content = /*html*/ `

        <h1>${title}</h1>
        <nav>
            <a href="/sign-up">Sign Up</a> 
            <a href="/log-in">Log In</a>
        </nav>
     `;
  return Layout({ title, content });
}
module.exports = { homeHtml };
