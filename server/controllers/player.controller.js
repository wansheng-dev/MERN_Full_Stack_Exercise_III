const Player = require('../models/player.model');

module.exports = {
  getAll(_req, res){
    Player.find()
    .then(players => res.json(players))
    .catch(err => res.json({
      message: 'ERROR: Failed to retrieve all documents.',
      error: err
    }));
  },

  getOne(req, res){
    Player.findById(req.params.id)
    .then(player => res.json(player))
    .catch(err => res.status(404));
  },

  create(req, res){
    Player.create(req.body)
      .then(player => res.json(player))
      .catch(err => res.status(400).json(err));
  },

  update(req, res){
    Player.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
      .then(player => res.json(player))
      .catch(err => res.status(400).json(err))
  },

  delete(req, res){
    Player.findByIdAndDelete(req.params.id)
    .then(result => {
        console.log(result);
        res.json({ status: 'success' })
      })
      .catch(err => res.json({
        message: 'ERROR: Failed to delete the document.',
        error: err
      }));
  },
}