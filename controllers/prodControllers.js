const router = require('express').Router()

router.get("/notes", (req, res) => {
    res.send("where ya notes at")
  
})

// app.get("/productivity/notes", (req, res) => {
//     res.send("productivity + req.params.notes")
// })

app.get("/productivity/notes:x", (req, res) => {
    let x = Number(req.params.x)
    let result = x * x
    res.send("productivity")
})

module.exports = router