const { Layout } = require('./layout.js')

function SearchQuestions(allQuestions) {
    let content =/*html*/`
    <nav>
    <a href='/submit-questions'>Contribute your Question</a>
    <a href='/search-questions'>Look into Questions pool</a>
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
    </div>`
    return Layout({ title: "Check-in questions | Search", content })
}

function allQuestionList(arr) {
    return arr.map(
        (question) => `
  <li>
    <p>${question.topic}</p>
    <p>${question.question}</p>
    <p>${question.username}</p>
  </li>`
    )
        .join("")
}

module.exports = { SearchQuestions }