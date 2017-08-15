console.log("Starting notes.js");
const fs = require('fs');

var fetchNotes = () => {
  try {
    //try reading the data already in notes.json, parsing it as json (from a string) and storing it as notes
    var notesString = fs.readFileSync('notes.json');
    return JSON.parse(notesString);
  } catch(e) {
    return []; //if there's nothing inside of notes.json, return an empty array
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  //create an empty notes array that will store the array of note objects
  var notes = fetchNotes();
  var note = {
    title, body
  };
  //filter() method creates a new array with all elements that pass the test implemented by the provided function
  var duplicateNotes = notes.filter((note) => note.title === title); //returns true if there is a duplicate note in the array
  //equivalent to notes.filter(function(note) { return note.title === title) };

  //if length of duplicate notes is greater than 0 then we don't want to save it, because a note with that title already exists
  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note; //return note to the caller of addNote (add in app.js)
  }
  //undefined will automatically get returned if return note doesn't return anything
};

var getAll = () => {
  console.log('Getting all notes.');
};

var getNote = (title) => {
  console.log('Retrieving', title + '.')
};

var removeNote = (title) => {
  console.log('Removing the', title, 'note.');
};

module.exports = {
  addNote, // = addNote: addNote in ES6
  getAll,
  getNote,
  removeNote
};