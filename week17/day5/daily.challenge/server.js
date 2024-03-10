const express=require('express');
const app=express();
const PORT=5000;

app.get('/api/hello',(req,res)=>{
    res.send('hello from express')
})

app.listen(PORT,()=>{
    console.log(`server is runnig on port ${PORT}`)
})
