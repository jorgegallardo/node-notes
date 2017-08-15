const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

//convert original object into a string
var originalNoteString = JSON.stringify(originalNote);

//write the original note string to the notes.json object
fs.writeFileSync('notes.json', originalNoteString);

//read from notes.json
var noteString = fs.readFileSync('notes.json');

//parse the string in the file into a json object
var note = JSON.parse(noteString); 

console.log(typeof note);
console.log(note.title);