let savedNotes = require('../public/assets/db/db.json')
const fs = require('fs');

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
    return res.json(savedNotes)
  });

  app.post('/api/notes', (req, res) => {
    let newNote = req.body;

    //assign an ID to each new note
    newNote.id = savedNotes.length.toString();
    
    //push new note into the db JSON file
    savedNotes.push(newNote);

    // Write to the JSON file to update with new data
    fs.writeFile("./public/assets/db/db.json", JSON.stringify(savedNotes),(err) => {
      if (err) {
        console.log(err); 
        res.sendStatus(404);
      } 
      else { 
        console.log("New Note Saved!");
        res.sendStatus(200);
      }
    });
  });

  app.delete('/api/notes/:id', (req, res) => {
      //grab query params
    let id = req.params.id;

    //finds element at ID
    let theID = (element) => element.id === id;
    let removeNote = savedNotes.findIndex(theID);

    //delete the element from the array
    savedNotes.splice(removeNote, 1);
    
    // Write a JSON file so update with new data
    fs.writeFile("./public/assets/db/db.json", JSON.stringify(savedNotes),(err) => {
      if (err) {
        console.log(err); 
        res.sendStatus(404);
      } else { 
        console.log("Note Deleted!");
        res.sendStatus(200);
      }
    });
  });
}