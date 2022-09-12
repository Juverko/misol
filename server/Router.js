const { json } = require('express');
const Post = require('./Schema');
const router = require('express').Router(); 
const Excel = require('xlsx');
const file = Excel.readFile('./file.xlsx');

router.post('/post',async(req,res)=>{
    try{
        const {name,number} = req.body;
        const post = await Post.create({name,number});
        res.json(post);
    }catch(e){
        console.log(e);
    }
});
router.get('/getAll',async(req,res)=>{
    try{
        const post = await Post.find();
        return res.json(post);
    }catch(e){
        if(e){
            console.log(e);
        }
    }   
});
router.get('/getExcel',async(req,res)=>{
    try{ 
        return res.send(Excel.utils.sheet_to_html(file.Sheets[file.SheetNames[0]]));
    }catch(e){
        if(e){
            console.log(e);
        }
    }   
});

router.get('/getById/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        console.log(id);
        if(!id){
            res.status(500).json({message:`Такой информации по айди ${id} не найден`});
        }
        const post = await Post.findById(id);
        return res.json(post);
    }catch(e){
        if(e){
            console.log(e);
        }
    }   
});
router.get('/getOne/:name',async(req,res)=>{
    try{
        // console.log(req.params.name);
        const name = req.params.name;
        if(req.params.name==undefined){
            res.status(500).json({message:`Такой информации по имени ${name} не найден`});
        }
        const post = await Post.find({name:name});
        // const post = await Post.find({number:{$lt:500}});
        return res.json(post);
    }catch(e){
        if(e){
            console.log(e);
        }
    }   
});
router.put('/update',async(req,res)=>{
    try{
        const data = req.body; 
        if(!data){
            res.status(500).json({message:`Такой информации по имени ${!data._id} не найден`});
        }
        // const post = await Post.findByIdAndUpdate(data._id,data,{new:true});
        const post = await Post.findOneAndUpdate(data.name,data,{new:true});//заменять через другие показатели
        
        return res.json(post);
    }catch(e){
        if(e){
            console.log(e);
        }
    }   
});




router.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params;
        if(!id){
            res.status(500).json({message:`нет такого поста с таким айди`});
        }
        const post = await Post.deleteOne(id);
        return res.json(post);

    }catch(e){
        console.log(e);
    }
});
module.exports = router;







/* 
    $eq (равно)
    $ne (не равно)
    $gt (больше чем)
    $lt (меньше чем)
    $gte (больше или равно)
    $lte (меньше или равно)
    $in определяет массив значений, одно из которых должно иметь поле документа
    $nin определяет массив значений, которые не должно иметь поле документа

*/





// app.get('/get',(req,res)=>{
//     if(res.req.query.name == "Munis"){
//         res.send({"hello":"results",datas:[1,2,3,4,5,5,6]});    
//     }
// })