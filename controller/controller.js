const Product=require('../models/product.model')





const createdata=async(req,res)=>{
    try {
        const product = await Product.create(req.body); 
        res.status(200).json(product); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const productget=async(req,res)=>{
    try {
        const product=await Product.find({});
        res.status(200).json(product); 
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}


const productgetById=async(req,res)=>{
    try {
        const id=req.params.id;
        const product=await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(404).json({message: error.message});
      }
}


const updateProduct=async(req,res)=>{
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
}


const productdelete=async(req,res)=>{
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
}




module.exports={
    createdata,
    productget,
    productgetById,
    updateProduct,
    productdelete
}