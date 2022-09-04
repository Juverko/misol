const mongoose = require('mongoose');
const express = require('express');
const app = express();
const URL_DB = `mongodb://localhost:27017/?readPreference=primary&ssl=false`;
// const Post = './model.js';
app.use(express.json());
PORT = 5000;
app.post('/',async(req,res)=>{
  // console.log(req.body);
  const {tName,value} = req.body;
  post = mongoose.model('Post',Post);
  post = await post.create({tName,value});
  res.status(200).json(post);
})

async function startApp(){
  try{
    await mongoose.connect(URL_DB,{useUnifiedTopology:true,useNewUrlParser:true});
    app.listen(PORT,()=>{console.log('SERVER in PORT '+PORT)})
  }catch(e){
    console.log(e);
  }
}
startApp(); 

const Post = mongoose.Schema({
  tName:{type:Date,required:true},
  value:{type:Object,required:true}
})
console.log(new Date());