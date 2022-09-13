const mongoose = require('mongoose');
// const Post = 

class Post {
    constructor(){
        this.postSchem = mongoose.model('Post',new mongoose.Schema({
            name:{type:String,required:true,index:true,unique: true},
            number:{type:Number,required:true}
        }))
        // this.ExcelSchem = mongoose.model('ExcelSchem',new mongoose.Schema({
        //     idReg:{type:Number,required:true,index:true,unique: true},
        //     region:{type:'String',required:true},
        //     amonat:{type:Number},
        //     total:{type:Number},
        // }))
    }
    createSchem(dataObject){
        return mongoose.model('ExcelSchem',new mongoose.Schema(dataObject))
    }
    
}
// module.exports =  mongoose.model('Post',Post);

module.exports =  new Post();
// export default Post;