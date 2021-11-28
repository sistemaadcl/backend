import mongoose from 'mongoose';
const productsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  price: {
    type: String
  },
  price_sell: {
      type: String
  },
  stock: {
      type: Number
  }
})
const products = mongoose.model('Products', productsSchema);
export default products;