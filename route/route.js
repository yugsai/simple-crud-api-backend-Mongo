var express=require('express');
var router=express.Router();

const controller=require('../controller/controller')


router.post('/create',controller.createdata)
router.get('/productget',controller.productget)
router.get('/productget/:id',controller.productgetById)
router.post('/update/:id',controller.updateProduct)
router.delete('/delete/:id',controller.productdelete)





module.exports=router