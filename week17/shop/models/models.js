const {db}=require('../config/db')

const _getAllproducts=()=>{
    return db('products').select('id','name');
}

const _getproductbyid=(id)=>{
    return db('products').select('*').where({id:productid});

}

module.exports={
    _getAllproducts,
    _getproductbyid,
}