const {createSession, getSession} = require('./model/sessions')

function createCookie (response, user) {
    const sessionId = createSession(user.id);
        response.cookie("sid", sessionId, {
          signed: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
          sameSite: "lax", //protect from csrf
          httpOnly: true, //protect from xss
        });
        response.redirect(`/submit-questions`);
}

function redirectIfLoggedIn (request, response, templateFunction) {
    const sid = request.signedCookies.sid;
    const session = getSession(sid);
    if (session) {
      response.redirect("/submit-questions")
    }
    else {response.send(templateFunction());}
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
    .reverse().join("")
}


function sanitize(string){
return string.replace(/</g, "&lt;");
}

function validate(errorMessage){
  if (errorMessage) {
    return `<span style="color: red">${errorMessage}</span>`;
  } else {
    return "";
  }
}
module.exports = { createCookie, redirectIfLoggedIn,allQuestionList, sanitize, validate }

