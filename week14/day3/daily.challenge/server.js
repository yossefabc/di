const express= require("express");
const bcrypt = require("bcrypt");

const app=express();
app.listen(3000,()=>{
    console.log('server is runnig')
})

app.get('/users',(req,res)=>{
    res.send('all list')
})

// module.exports=server
// const password = 1234567;

// const salt = bcrypt.genSaltSync(10);
// console.log(salt);

// const hash = bcrypt.hashSync(password+"", salt);
// console.log(hash);

// const hashpassword = '$2b$10$V7ffSkuYTlfXVXUr.CX9eOj36YqAkA1DGcgDUgL48Okx.7Gj3TXCG';

// const match = bcrypt.compareSync(password+"", hashpassword);
// console.log(match);