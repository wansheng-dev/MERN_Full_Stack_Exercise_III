const PlayerController = require('../controllers/player.controller');

module.exports = app => {
  app.get('/api/players', PlayerController.getAll);
  app.get('/api/players/:id', PlayerController.getOne);
  app.post('/api/players/create', PlayerController.create);
  app.put('/api/players/update/:id', PlayerController.update);
  app.delete('/api/players/delete/:id', PlayerController.delete);
}