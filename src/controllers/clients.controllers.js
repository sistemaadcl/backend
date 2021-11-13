import Client from "../models/client.models.js";

export async function newClient(req, res) {
  const { name, lastname, dni } = req.body;
  console.log(req.body);
  const client = new Client({ name, lastname, dni });
  const newClient = await client.save();
  res.json(newClient);
}
export async function searchClient(req, res) {
  const client = await Client.find();
  res.json(client);
}

export const addCotizationClient = (req, res) => {
  const { idClient, idCotization } = req.body;
  Client.findOneAndUpdate(
    { _id: idClient },
    { $push: { cotizations: idCotization } },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
      }
    }
  );
  res.json("ok");
};

export const getCotizationClient = (req, res) => {
  const { id } = req.params;
  Client.findOne({ _id: id })
    .populate({
      path: "cotizations",
      populate: { path: "catalog", populate: "products" },
    })
    .exec((err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
};
