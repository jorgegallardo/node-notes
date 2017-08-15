const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv
var command = argv._[0];
// console.log('Command:',command);
// console.log('Process:', process.argv);
// console.log('Yargs:', argv);

switch(command) {
  case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
      console.log('Your note has been added to notes.');
    } else { //note === undefined
      console.log('Note title already in use.');
    }
    break;
  case 'list':
    notes.getAll();
    break;
  case 'read':
    var readNote = notes.getNote(argv.title);
    console.log(readNote ? `${readNote.body}` : 'The note was not found.');
    break;
  case 'remove':
    var noteRemoved = notes.removeNote(argv.title);
    console.log(noteRemoved ? 'The note was successfully removed.' : 'The note was not found/removed.');
    break;
  default:
    console.log('Unrecognized command.');
}

// if(command === 'add') {
//   console.log('Adding new note.');
// } else if(command === 'list') {
//   console.log('Listing all notes.');
// } else if(command === 'read') {
//   console.log('Reading note.');
// } else if(command === 'remove') {
//   console.log('Removing note.');
// } else {
//   console.log('Unrecognized command.');
// }