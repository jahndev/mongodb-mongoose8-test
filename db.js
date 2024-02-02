const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/clientsdb', { useNewUrlParser: true, useUnifiedTopology: true });

const clientSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
