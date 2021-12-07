const fs = require("fs");
const chalk = require("chalk");


module.exports.getNotes = () => {
    return ("Your notes  ........");
};

module.exports.addNotes = (title, body)  => {
    const notes = loadNotes()

    const duplicateNote = notes.find( (note)  =>  note.title === title); 

    if (!duplicateNotes) {
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

module.exports.removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter( (note)  =>  note.title !== title);
    
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.red('Removed'));
    }else{
        console.log(chalk.blue('No match'));
    }
};



module.exports.listNotes = (title,body) => {
    const notes = loadNotes();

    notes.forEach(  note => {
        console.log(chalk.red.underline('Title: ' + note.title));
        console.log(chalk.blue.inverse('Body: ' + note.body));
    });

};

module.exports.readNotes = (title) => {
    const notes = loadNotes();
    const readNote = notes.find( (note)  =>  note.title === title);
    
    if(readNote){
        console.log(chalk.red.underline('Title: ' + readNote.title));
        console.log('Body: ' + readNote.body);
    }else{
        console.log(chalk.red('No note  on the title provided!'));
    }
};


const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
};

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
    return [];
    }
}