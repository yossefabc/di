const express=require('express');
const {getAllproducts,getproductbyid}= require('../controllers/products');

const router=express.Router()

router.get('/',getAllproducts);
router.get('/pid',getproductbyid);

module.exports=router;