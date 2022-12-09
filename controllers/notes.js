const express = require('express')
const router =express.Router()

router.get("/notes", (req, res) => {
    res.render("notes")
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  
})

app.get("/productivity/notes", (req, res) => {
    res.send("productivity + req.params.notes")
})

// app.get("/productivity/notes:x", (req, res) => {
//     let x = Number(req.params.x)
//     let result = x * x
//     res.send("productivity")
// })

module.exports = router