const {createSession, getSession} = require('./model/sessions')

function createCookie (response, user) {
    const sessionId = createSession(user.id);
        response.cookie("sid", sessionId, {
          signed: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
          sameSite: "lax", //protect from csrf
          httpOnly: true, //protect from xss
        });
        response.redirect(`/check-in-questions`);
}

function redirectIfLoggedIn (request, response, templateFunction) {
    const sid = request.signedCookies.sid;
    const session = getSession(sid);
    if (session) {
      response.redirect("/check-in-questions")
    }
    else {response.send(templateFunction());}
}

module.exports = { createCookie, redirectIfLoggedIn }