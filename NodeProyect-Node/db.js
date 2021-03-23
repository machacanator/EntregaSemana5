const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/Mice_Website';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});