const { Layout } = require("./layout.js");

// Missing routes HTML
function missingRoutesHtml() {
  const title = "You are lost, type in a correct url please!";
  const content = /*html*/ `

        <h1>${title}</h1>
        <img src="https://t3.ftcdn.net/jpg/00/99/46/22/360_F_99462260_tju4lZZYCrjpEIY4IULdwKNi8c0PF9qz.jpg" />
        
     `;
  return Layout({ title, content });
}
module.exports = { missingRoutesHtml };