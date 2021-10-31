import Client from '../models/client.models.js';

export async function newClient(req, res) {
  const { name, lastname, dni } = req.body;
  console.log(req.body);
  const client = new Client({ name, lastname, dni });
  const newClient = await client.save();
  res.json(newClient);
}
export async function searchClient(req, res) {
  const { name } = req.query;
  const client = await findOne({ name });
  res.json(client);
}