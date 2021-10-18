const mongoose = require('mongoose');
const quotesSchema = mongoose.Schema({
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
const quotes = mongoose.model('quotes', quotesSchema);
module.exports = quotes;