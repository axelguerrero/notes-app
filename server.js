require("dotenv").config()
const express = require("express")
const app = express()
const methodOverride = require('method-override')

//added code to import the router, express settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(methodOverride("_method"))

//Routes
app.use("/notes", require("./controllers/notes"))
//home route
app.get("/", (req, res) => {   
    res.render("Home")
})

//prod route
app.get("/notes", (req, res) => {
    res.render("Notes")
})


//about route
app.get("/about", (req, res) => {
    res.render("About")
})

//contact route
app.get("/contact", (req, res) => {
    res.render("Contact")
})

//account
app.get("/account", (req, res) => {
    res.render("Account")
})

//error route
app.get('*', (req, res) => {
    res.render('Error404')
  }) 

  //listen for connections
app.listen(process.env.PORT, () => {
    console.log("yurr")
})