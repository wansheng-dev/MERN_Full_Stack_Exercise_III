const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [
        true,
        'Player name is requried.'
      ],
      minlength: [
        2,
        'Name must be at least 2 characters in length.'
      ],
      unique: [ true,
        'This name already exists, please use another.'
      ],
    },
    position: { type: String },
    g1: {
      type: String,
      default: 'UD'}, 
    g2: {
      type: String,
      default: 'UD'}, 
    g3: {
      type: String,
      default: 'UD'}, 
  },
  {
    timestamps: true
  }
);

PlayerSchema.plugin(uniqueValidator, {message: 'This name already exists, please use another.'});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;