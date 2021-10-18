const Client = require('../models/client.models');

module.exports = {
  async newClient (req, res) {
    const { name, lastname, dni } = req.body;
    console.log(req.body);
    const client = new Client({ name, lastname, dni });
    const newClient = await client.save();
    res.json(newClient);
  }
}