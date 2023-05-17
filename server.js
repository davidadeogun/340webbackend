/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
// const express = require("express")
// const env = require("dotenv").config()
// const path = require("path")
// const app = express()

// This is the one shown in the video by prof  https://www.youtube.com/watch?v=KESjrocakuI
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")


/* ***********************
 * Routes
 *************************/
app.use(require("./routes/static"))
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

/*Example of the route to deliver the home view*/
app.get("/", function(req, res) {
  res.render("index", {title: "Home"})
})


// app.get("/", function(req, res) {
//   console.log(req)
//   res.json({title: "tesitng json", house: "123kakakaskks"})
// })
//"index", {title: "Home"}
/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
