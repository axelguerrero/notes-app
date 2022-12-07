require("dotenv").config()
const express = require("express")
const app = express()

//added code to import the router, express settings
// app.set("views", __dirname + "/views")
// app.set('view engine', 'jsx')

//Routes
//home route
app.get("/", (req, res) => {   
    res.send("home page")
})

//prod route
app.get("/productivity", (req, res) => {
    res.send("productivity")
})

//about route
app.get("/about", (req, res) => {
    res.send("about")
})

//contact route
app.get("/contact", (req, res) => {
    res.send("contact")
})

//error route
app.get('*', (req, res) => {
    res.send('error404')
  }) 

app.listen(process.env.PORT)