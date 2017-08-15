console.log("Starting notes.js");
const fs = require('fs');

var addNote = (title, body) => {
  //create an empty notes array that will store the array of note objects
  var notes = [];
  var note = {
    title, body
  };
/*
  The try statement lets you test a block of code for errors.
  The catch statement lets you handle the error.
  The throw statement lets you create custom errors.
  The finally statement lets you execute code, after try and catch, regardless of the result.
*/
  try {
    //try reading the data already in notes.json, parsing it as json (from a string) and storing it as notes
    var notesString = fs.readFileSync('notes.json');
    notes = JSON.parse(notesString);
  //if an exception is thrown in the try block, state why.
  } catch(e) {
    console.log('The file notes.json was empty.');
  }

  //filter() method creates a new array with all elements that pass the test implemented by the provided function
  var duplicateNotes = notes.filter((note) => note.title === title); //returns true if there is a duplicate note in the array
//equivalent to notes.filter(function(note) { return note.title === title) };

  //if length of duplicate notes is greater than 0 then we don't want to save it, because a note with that title already exists
  if(duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes.json', JSON.stringify(notes));
  } else {
    console.log('A note with that title already exists.');
  }
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