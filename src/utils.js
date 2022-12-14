const { createSession, getSession } = require('./model/sessions')

function createCookie(response, user) {
  const sessionId = createSession(user.id);
  response.cookie("sid", sessionId, {
    signed: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: "lax", //protect from csrf
    httpOnly: true, //protect from xss
  });
  response.redirect(`/submit-questions`);
}

function redirectIfLoggedIn(request, response, templateFunction) {
  const sid = request.signedCookies.sid;
  const session = getSession(sid);
  if (session) {
    response.redirect("/submit-questions")
  }
  else { response.send(templateFunction()); }
}


function allQuestionList(arr) {
  return arr.map(
    (question) => `
  <li>
    <p id="topic-label">${capitalizeFirstLetter(question.topic)}</p>
    <p id="post-questions">${question.question}</p>
    <p id="username-label">${question.username}</p>
  </li>`
  )
    .reverse().join("")
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function sanitize(string) {
  return string.replace(/</g, "&lt;");
}

function validate(errorMessage) {
  if (errorMessage) {
    return `<span style="color: red">${errorMessage}</span>`;
  } else {
    return "";
  }
}

function validateLoginAndSignup (username, password, errors) {
    //let errors = {};
  if (!username) {
    errors.username = "Please add a username";
  }
  if (!password) {
    errors.password = "Please add a password";
  }

  
  }


module.exports = { createCookie, redirectIfLoggedIn, allQuestionList, sanitize, validate, validateLoginAndSignup }

