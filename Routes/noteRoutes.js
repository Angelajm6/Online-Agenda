const router = require("express").Router();

//history of notes stored as a json object in db folder
const {
    notes
} = require('../../db/db');

//to create or delete a note
const {
    noteCreateNewNote,
    noteDeleteNote
} = require('../../lib/noteFunctions');


//save note history to json db 
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = noteCreateNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
 })

module.exports = router;