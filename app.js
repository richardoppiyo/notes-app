// const utils = require("./utils.js");
const chalk = require("chalk");
const yargs = require("yargs");
const validator = require("validator");
const myNotes = require("./notes.js");

// Customize yargs version
yargs.version('1.1.0');

// create cmd add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOptiono: true,
            type: 'string'
        },
        body: {
            describe: 'Notes body',
            demandOptiono: true,
            type: 'string'

        }
    },
    handler: function(argv){
        myNotes.addNotes(argv.title,argv.body)
        // console.log('Title: ' + argv.title);
        // console.log('Body: ' + argv.body);
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOptiono: true,
            type: 'string'
        },
        body: {
            describe: 'Notes body',
            demandOptiono: true,
            type: 'string'

        }
    },
    handler: function(argv){
        myNotes.removeNotes(argv.title,argv.body)
        // console.log('Title: ' + argv.title);
        // console.log('Body: ' + argv.body);
    }
})

//list the comands
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function(){
        console.log('Removing the new note');
    }
    
})

//read the commands
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function(){
        console.log('Reading the new note');
    }
})


yargs.parse();