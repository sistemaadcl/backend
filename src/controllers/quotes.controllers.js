import Quotes, { find } from '../models/client.models.js';

export async function createQuote() {
  const { name, request } = req.body;
  const quotes = new Quotes({ name, request });
  const newQuotes = await quotes.save();
  res.json(newQuotes);
}
export async function getQuotes() {
  const quotes = await find({});
  res.json(quotes);
}
