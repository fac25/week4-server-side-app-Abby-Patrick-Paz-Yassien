const { Layout } = require('./layout.js')
const { allQuestionList } = require('../utils')

function SearchQuestions(allQuestions) {
  let content =/*html*/`
  <div class="question-container">
    <nav class="question-nav">
    <a href='/submit-questions'>Contribute your Question</a>
    <a href='/search-questions'>Look into Questions pool</a>
    <form method="POST" action="/log-out"><button>Log out</button></form>
    </nav>
    <div>
    <h1>Check-in Questions</h2>
    <form method="POST">
    <label for="topic">Question Topic?</label>
      <select name="topic" id="topic">
        <option value="">--Please choose an Topic--</option>
        <option value="mindset">Mindset</option>
        <option value="icebreaker">Icebreaker</option>
        <option value="holiday">Holiday</option>
        <option value="funny">Funny</option>
        <option value="childhood">Childhood</option>
        <option value="others">Others</option>
      </select>   
    <button >Search</button>
      </form>
      </div>
      <div>
      <ul>
        ${allQuestionList(allQuestions)}
      </ul>
    </div>
    </div>`
  return Layout({ title: "Check-in questions | Search", content })
}


module.exports = { SearchQuestions }