import mongoose from 'mongoose';
const clientSchema = mongoose.Schema({
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  dni: {
    type: String
  },
  cotizations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cotizations",
    },
  ],
})
const client = mongoose.model('clients', clientSchema);

export default client;