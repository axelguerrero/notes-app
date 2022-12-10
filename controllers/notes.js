const router = require('express').Router()
const db = require('../models/server')



router.get('/notes', (req, res) => {
    db.NoteC.find()
        .then((notes) => {
            res.render("Notes", { notes })
        })
        .catch(err => {
            console.log('err', err)
            res.render('Error404')
        })
  })
  
//   post route
  router.post('/', (req, res) => {
    db.NoteC.create(req.body)
    .then(() => {
        res.redirect('/notes')
    })
    .catch(err => {
        console.log('err', err)
        res.render('Error404')
    })
  })

//new route
router.get('/new', (req, res) => {
    res.render('notes/new')
  })

//
  router.get('/:id', (req, res) => {
    db.NoteC.findOne({ _id: req.params.id })
        .then(notes => {
            res.render('notes/show', { notes })
        })
        .catch(err => {
            console.log('err', err)
            res.render('Error404')
        })
})

router.put('/:id', (req, res) => {
    db.NoteC.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/notes/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('Error404')
        })
})

router.delete('/:id', (req, res) => {
    db.NoteC.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/notes')
        })
        .catch(err => {
            console.log('err', err)
            res.render('Error404')
        })
})

router.get('/:id/edit', (req, res) => {
    db.NoteC.findById(req.params.id)
        .then(notes => {
            res.render('notes/edit', { notes })
        })
        .catch(err => {
            res.render('Error404')
        })
})
  
  //delete route
//   router.get('/delete', (req, res) => {
//       res.render('notes/delete')
//     })

module.exports = router