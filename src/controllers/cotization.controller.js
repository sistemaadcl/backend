import Cotization from "../models/cotizations.model.js";

export const createCotization = async (req, res) => {
  const newCotization = new Cotization(req.body);
  const cotization = await newCotization.save();
  console.log(cotization);
  res.json("ok");
};

export const getAllCotizations = async (req, res) => {
  const cotizations = await Cotization.find();
  res.json(cotizations);
};

export const addCatalogCotization = async (req, res) => {
  const { catalogs, name } = req.body;
  Cotization.findOneAndUpdate(
    { name: name },
    { $push: { catalog: catalogs } },
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

export const addClientCotization = async (req, res) => {
  const { clientId, cotizationId } = req.body;
  Cotization.findOneAndUpdate(
    { _id: cotizationId },
    { $push: { clients: clientId } },
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

export const getClientsCotization = (req, res) => {
  const { id } = req.params;
  if (id) {
    Cotization.findOne({ _id: id })
      .populate("clients")
      .populate({ path: "catalog", populate: "products" })
      .exec((err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data);
        }
      });
  }
};

export const cotizationsPay = async (req, res) => {
    const cotizations = await Cotization.find( { state: true } );
    res.json(cotizations)
}
