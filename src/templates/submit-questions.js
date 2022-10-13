const { Layout } = require('./layout.js')
const { allQuestionList, validate } = require('../utils')

function QuestionForm(arr, errors = {}) {
  let content =/*html*/`
<div class="question-container">
    <nav class="question-nav">
    <a href='/submit-questions'>Share your Question</a>
    <a href='/search-questions'>Find Questions</a>
    <form method="POST" action="/log-out" ><button class="orange-btn">Log out</button></form>
    </nav>
    <div class="submit-container">
      <form method="POST" class="submit-form"> 
      <label for="question" class="submit-form-label">Share your Check-in Question</label>
      ${validate(errors.question)}
      <textarea id="question" name="question"></textarea>
      <label for="topic" class="submit-form-label">Topic</label>
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
      <a href='/search-questions'>SKIP-Take me to the questions</a>
      </div>

      <div>
      <ul>
      ${allQuestionList(arr)}
      </ul>
      </div> 
  </div>
  
    `
  return Layout({ title: "Check-in questions | Contribute", content })
}


module.exports = { Layout, QuestionForm }