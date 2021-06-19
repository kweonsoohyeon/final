"use strict";
const express=require('express');
const app=express();
const port=8080;


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kwon:a043595@nemo.c92op.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


const fs=require('fs');
const ejs=require('ejs');
const url= require('url');



app.set('views','./views');
app.set('view engine','ejs');



app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/views/nemo/homepage.html');
    
})

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + '/views/nemo/login.html');
   
})

app.use('/js',express.static('./server/js'))
app.use('/css',express.static('./server/js'))

app.listen(port,()=>{
    console.log('loaded');
})
 

