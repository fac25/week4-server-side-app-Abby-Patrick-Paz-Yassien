const { Layout } = require("./layout.js");

// Home HTML
function homeHtml(login_url) {
  const title = "Check-in Question Pool!";
  const content = /*html*/ `
  <div class="home-container">
      <div class="home-content">
        <h1>${title}</h1>
        <nav class="home-nav">
            <a href="/sign-up" class="yellow-btn">Sign Up</a> 
            <a href="/log-in" class="orange-btn">Log In</a>
            <a href="${login_url}"><i class="fa fa-github" style="font-size:20px"></i>Log in with GitHub</a>
        </nav>
      </div>
    </div>
     `;
  return Layout({ title, content });
}
module.exports = { homeHtml };
