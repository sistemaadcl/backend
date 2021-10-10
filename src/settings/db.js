const mongoose = require('mongoose');


const connection = mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = connection;