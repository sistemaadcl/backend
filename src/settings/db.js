import mongoose from 'mongoose';


const connection = mongoose.connect('mongodb://localhost/system_adcl', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export default connection;