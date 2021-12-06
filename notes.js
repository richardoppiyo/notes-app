const fs = require("fs");
const chalk = require("chalk");


module.exports.getNotes = function(){
    return ("Your notes  ........");
};

module.exports.addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.red('New note added!'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }
}

module.exports.removeNotes =  function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.red('Removed'));
    }else{
        console.log(chalk.blue('No match'));
    }
    
    
};

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
};

const loadNotes =  function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
    return [];
    }
}