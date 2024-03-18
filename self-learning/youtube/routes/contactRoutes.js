const express = require('express');
const router= express.Router();

router.route('/').get((req,res)=>{
    res.send("get all contacts")
})


module.exports=router;