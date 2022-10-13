// get request /logout
// delete session from the table
// clear the cookie
// redirect to homepage
const { removeSession, getSession } = require("../model/sessions.js")

function post(req, res) {

    const sid = req.signedCookies.sid;

    if (!getSession(sid)) {
      res.redirect("/")
    }
    else {
        removeSession(sid);
        res.clearCookie("sid");
        res.redirect("/");
    }

    
}



module.exports = { post };