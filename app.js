const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note.',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note.',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note.', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes.')
  .command('read', 'Read a note.', {
    title: titleOptions
  })
  .command('remove', 'Remove a note.', {
    title: titleOptions
  })
  .help()
  .argv
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
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s):`);
    allNotes.forEach((note) => {
      console.log(`---\nTitle: ${note.title}\nBody: ${note.body}`);
    });
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