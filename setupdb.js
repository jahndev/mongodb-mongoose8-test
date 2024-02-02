const mongoose = require('mongoose');
const Client = require('./db');

mongoose.connect('mongodb://localhost:27017/clientsdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Insert data into MongoDB using promises
const clientData = require('./data.json');
Client.insertMany(clientData)
  .then(() => {
    console.log('Data inserted successfully.');
  })
  .catch((err) => {
    console.error('Error inserting data:', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });
