const express=require('express');
const app=express();
const port =5000;

app.get('/satish',(req,res)=>{
    res.send("Hello! This is satish");
});

app.listen(port,()=>{
    console.log("satish you are welcome!")
})