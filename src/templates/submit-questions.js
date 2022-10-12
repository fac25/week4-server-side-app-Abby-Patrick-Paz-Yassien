function Layout({ title, content }) {
    return /*html*/ `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <link rel="stylesheet" href="../style.css">
          </head>
          <body>
              <main>
                ${content}
              </main>
            </div>
          </body>
        </html>
      `
}

function SubmitQuestion() {
    let content =/*html*/`
    <nav>
    <a href='/submit-questions'>Contribute your Question</a>
    <a href='/search-questions'>Look into Questions pool</a>
    </nav>
    <div>
      <form method="POST"> 
      <label for="question-input">Question Topic?</label>
      <textarea id="question-input" name="question-input"></textarea>
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
  </div>
    `
    return Layout({ title: "Check-in questions | Contribute", content })
    
}

module.exports = { Layout, SubmitQuestion }