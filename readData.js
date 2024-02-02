const mongoose = require('mongoose');
const Client = require('./db');

mongoose.connect('mongodb://localhost:27017/clientsdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Use the find() method and execute() to get the results
Client.find({})
  .exec()
  .then((clients) => {
    console.log('Clients data:');
    console.log(clients);
  })
  .catch((err) => {
    console.error('Error reading data:', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });
