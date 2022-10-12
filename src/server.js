// const express = require("express")
// const server = express()

// // Routes imports
// const home = require("./routes/home")

// // Middleware
// const staticHandler = express.static("public")
// const cookieParser = require("cookie-parser")
// const bodyParser = express.urlencoded({ extended: false })

// server.use(staticHandler)
// server.use(cookieParser)
// server.use(bodyParser)

// // Routes
// server.get("/", home.get)

// module.exports = server

const express = require("express")
const home = require("./routes/home")
const server = express()

// Serving static files
server.use(express.static("public"))

server.get("/", home.get)

module.exports = server
