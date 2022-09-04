const router = require('express').Router();
let Post = require('./schema.js'); 

router.post('/post',async(req,res)=>{ 
  try{
    const{tName,value} = req.body;
    const post = await Post.create({tName,value});
    res.status(200).json(post);
  }catch(e){
    res.status(500).json(e);
  }
});
router.get('/get');
router.get('/getAll',async(req,res)=>{
  try{
    const post = await Post.find();
    console.log(post);
    return res.json(post);
  }catch(er){
    res.status(500).json(er);
  }
});
router.get('/getLast',async(req,res)=>{
  try{
    const post = await Post.find().sort({ _id: -1 }).limit(10)
    console.log(post);
    return res.json(post);
  }catch(er){
    res.status(500).json(er);
  }
});

router.get('/get/:id',async(req,res)=>{
  try{
    const {id} = req.params;
    if(!id){
      res.status(400).json({message:'Id не указан'});
    }
    const post = await Post.findById(id);
    console.log(post);
    return res.json(post);
  }catch(er){

  }
});
router.delete('/del');
module.exports = router;