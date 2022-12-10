const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "Untitled" },
  description: { type: String, default: "nothing to see here..."}
})

module.exports = mongoose.model("NoteC", notesSchema) 