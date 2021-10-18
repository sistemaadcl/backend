const mongoose = require('mongoose');
const clientSchema = mongoose.Schema({
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  dni: {
    type: String
  },
})
const client = mongoose.model('clients', clientSchema);
module.exports = client;