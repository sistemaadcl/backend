import mongoose from 'mongoose';


const connection = mongoose.connect('mongodb+srv://admin:admin@cluster0.pxwbq.mongodb.net/system_adcl?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export default connection;