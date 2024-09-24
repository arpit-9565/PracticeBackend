require('dotenv').config();
const express = require('express');

const app=express();

const port=3000;

app.get('/',(req,res)=>{
    res.send("message");
})

app.get('/youtube',(req,res)=>{
    res.redirect("https://youtube.com");
})

app.get('/saty',(req,res)=>{
    res.send("My name is Arpit");
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at${port}`);
})