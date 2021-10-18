const Quotes = require('../models/client.models');

module.exports = {
  async createQuote(){
    const { name, request } = req.body;
    const quotes = new Quotes({ name, request});
    const newQuotes = await quotes.save();
    res.json(newQuotes);
  }
}
