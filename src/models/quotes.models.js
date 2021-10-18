const mongoose = require('mongoose');
const quotesSchema = mongoose.Schema({
  name: {
    type: String,
  },
  request: {
    type: Boolean,
  },
})
const quotes = mongoose.model('quotes', quotesSchema);
module.exports = quotes;