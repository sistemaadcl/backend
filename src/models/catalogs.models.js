import mongoose from "mongoose";
const catalogSchema = mongoose.Schema({
  name: {
      type: String
  },
  offer: {
    type: Boolean
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});
const catalog = mongoose.model("Catalogs", catalogSchema);

export default catalog;
