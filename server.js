/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/

// This is the one shown in the video by prof  https://www.youtube.com/watch?v=KESjrocakuI
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const baseController = require("./controllers/baseController") //Added a new require statement to bring the base controller into scope

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

/*Example of the route to deliver the home view*/
//This is the initial route that was used
// app.get("/", function(req, res) {
//   res.render("index", {title: "Home"})
// })

//Index route
app.get("/", baseController.buildHome)

//Inventory routes
app.use("/inv", require("./routes/inventoryRoute"))


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
