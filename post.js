const express = require('express');
const mongoose  = require('mongoose');
const PORT = 5000;

const router = require('./Router.js');


const app = express();
app.use(express.json());





async function start(){ 
  try{
    await mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true});
    app.listen(PORT,()=>{console.log('сервер привет')})
  }
  catch(e){
    console.log(e);
  }
}
start();