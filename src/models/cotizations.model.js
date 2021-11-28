import mongoose from "mongoose";
const cotizationSchema = mongoose.Schema({
  name: {
      type: String
  },
  state: {
    type: Boolean
  },
  offer: {
      type: Boolean
  },
  catalog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Catalogs",
    },
  ],
  clients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clients",
    },
  ],
});
const cotization = mongoose.model("Cotizations", cotizationSchema);

export default cotization;
