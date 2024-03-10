const {_getAllproducts,_getproductbyid}=
require('../models/models');


const getAllproducts=async (req,res)=>{
try{
    const data= await _getAllproducts();
    res.json(data)
} catch(error){
    console.log(error);
    res.status(404).json({message:'not found'});

}
}


const getproductbyid=async (req,res)=>{
    try{
        const {pid}=req.params;
        const data= await _getproductbyid(productid);
        res.json(data)
    } catch(error){
        console.log(error);
        res.status(404).json({message:'not found'});
        
    }
    }

    module.exports={getAllproducts,getproductbyid}