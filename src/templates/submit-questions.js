const { Layout } = require('./layout.js')
const { validate } = require("../utils.js");

function SubmitQuestion(errors = {}) {
    let content =/*html*/`
    <nav>
    <a href='/submit-questions'>Contribute your Question</a>
    <a href='/search-questions'>Look into Questions pool</a>
    </nav>
    <div>
      <form method="POST"> 
      <label for="question">Question</label>
      ${validate(errors.question)}
      <textarea id="question" name="question"></textarea>
      <label for="topic">Topic</label>
      ${validate(errors.topic)}
      <select name="topic" id="topic">
      <option value="">--Please choose an Topic--</option>
      <option value="mindset">Mindset</option>
      <option value="icebreaker">Icebreaker</option>
      <option value="holiday">Holiday</option>
      <option value="funny">Funny</option>
      <option value="childhood">Childhood</option>
      <option value="others">Others</option>
  </select>   
    <button>Submit</button>
      </form>
      <button>SKIP-Take me to the questions</button>
  </div>
    `
    return Layout({ title: "Check-in questions | Contribute", content })

}

module.exports = { Layout, SubmitQuestion }