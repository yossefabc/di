const express = require('express');

const cors = require('cors');
const router= require('./routes/products');

const app= express();
app.use(cors());

app.listen(process.env.PORT||5000,()=>{
    console.log(`run on server${process.env.PORT||5000}`)
})

app.use('/api/products',router)

