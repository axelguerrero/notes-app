const db = require('../models')

db.note.create([{
    title: "First Note",
    description:""
}
])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})