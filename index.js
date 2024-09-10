const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model'); // Import product model

const app = express();
app.use(express.json()); 

const route=require('./route/route')
app.use('/api',route)


app.get('/', (req, res) => {
  res.send('Hello Mongo and Node World!!');
});







mongoose.connect('mongodb+srv://admin:admin12@backenddb.ljiqd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to the database');
  // Start the server after successful DB connection
  app.listen(3000, () => {
      console.log('Server is running on port 3000');
  });
})
.catch((error) => {
  console.log('Failed to connect to the database', error);
});