const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model'); // Import product model

const app = express();
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Hello Mongo and Node World!!');
});


app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body); 
        res.status(200).json(product); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/productget',async (req,res)=>{
  try {
    const product=await Product.find({});
    res.status(200).json(product); 
  } catch (error) {
      res.status(500).json({message: error.message});
  }
})


app.get('/product/:id',async (req,res)=>{
  try {
    const id=req.params.id;
    const product=await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
})



app.post('/update/:id',async (req,res)=>{
  try {
    const id=req.params.id;
    const product=await Product.findByIdAndUpdate(id,req.body);
    if(!product){
      res.status(404).json({
        message:"Product not found"
      })
    }
    const updatedProduct=await Product.findById(id)
    res.status(200).json({updatedProduct})
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})


app.delete('/delete/:id',async (req,res)=>{
  try {
    const id=req.params.id;
    const product=await Product.findByIdAndDelete(id)
      if(!product){
        return res.status(200).json({
          message:"Product not found"
        })
      }
      res.status(200).json({
        message:"Product deleted successfully"
      })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
})


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