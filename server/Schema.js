const mongoose = require('mongoose');
const Post = new mongoose.Schema({
    name:{type:String,required:true,index:true,unique: true},
    number:{type:Number,required:true}
})

module.exports =  mongoose.model('Post',Post);