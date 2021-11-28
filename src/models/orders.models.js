import mongoose from 'mongoose';
const ordersSchema = mongoose.Schema({
  name: {
    type: String,
  },
  tracking: String,
  state: {
    type: Boolean,
  },
  cotizations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cotizations",
    },
  ],
})
const orders = mongoose.model('orders', ordersSchema);
export default orders;