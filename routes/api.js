let savedNotes = require('../public/assets/db/db.json')
const fs = require('fs');

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
      // Get Magic
  });

  app.post('/api/notes', (req, res) => {
      // Post Magic
  });

  app.delete('/api/notes/:id', (req, res) => {
      // Delete Magic
  });
}