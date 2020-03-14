const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/configs/mongoose.config');
require('./server/routes/player.route')(app);

app.listen(1337, () => {
  console.log('Listening at Port 1337.')
})