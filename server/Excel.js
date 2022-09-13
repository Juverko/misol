const Excel = require('xlsx');
const file = Excel.readFile('./file.xlsx');
const Schema = require('./Schema');

const express = require('express');
const mongoose = require('mongoose');
const Emitter = require('events');
const emitter = new Emitter();
const request = require('request');
var cors = require('cors');
let app = express();
app.use(cors());

app.use(express.json()); 




emitter.on('send',(data,url)=>{
    request({
      url: 'http://localhost:5000/Excel',
      method: 'POST',
      json: data,
    }, function(error, response, body){
    //   console.log(body);
    });
  })



function start() {
    let data = [];  
    Excel.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]).forEach(el=>{
        if(el.region && el.idReg){  
            data.push(el);
        }
    }) 
    let dataskeys = []
    for(let k in data[0]){
        dataskeys.push([[k],[typeof(data[0][k])]]);
    } 
    let tableKeys = {};
    dataskeys.map(el=>{ 
        tableKeys[el[0][0]] = {type:el[1][0]} 
    })  
    const ExcelSchem = Schema.createSchem(tableKeys); 
    app.post('/Excel',async(req,res)=>{ 
        const body = req.body;
        console.log(body);  
        const post = await ExcelSchem.create(body);
        res.status(200).json(post);
    })
    app.get('/ExcelgetAll',async(req,res)=>{ 
        const post = await ExcelSchem.find();
        res.status(200).json(post);
})
    
    try{
        mongoose.connect('mongodb://localhost:27017/?readPreference=primary&ssl=false',{useUnifiedTopology:true,useNewUrlParser:true});
        app.listen(5000,()=>{console.log("срединение с БД успешна")})
        data.forEach(el=>{ 
            emitter.emit('send',el)
        })
    }catch(er){
        console.log(er);
    }
}
start();


// module.exports = start();

