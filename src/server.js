const express = require("express")
const cookieParser = require("cookie-parser")
const staticHandler = express.static("public")
const bodyParser = express.urlencoded({ extended: false })
const server = express()

// Routes imports
const home = require("./routes/home")

// Middleware
server.use(staticHandler)
server.use(cookieParser)
server.use(bodyParser)

// Routes
server.get(home.get)

module.exports = server
