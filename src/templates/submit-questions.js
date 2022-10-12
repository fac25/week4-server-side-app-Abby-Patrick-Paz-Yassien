const { Layout } = require('./layout.js')
const { allQuestionList } = require('../utils')


function QuestionForm(arr) {
  let content =/*html*/`
    <nav>
    <a href='/submit-questions'>Contribute your Question</a>
    <a href='/search-questions'>Look into Questions pool</a>
    </nav>
    <div>
      <form method="POST"> 
      <label for="question">Question Topic?</label>
      <textarea id="question" name="question"></textarea>
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
    <button >Submit</button>
      </form>
      <button>SKIP-Take me to the questions</button>
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