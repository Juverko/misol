const mongoose = require('mongoose'); 
  const Post = new mongoose.Schema({ 
    tName:{type:Date,required:true},
    value:{type:Object,required:true}
  }) 

module.exports = mongoose.model('Post',Post);