const express = require('express');
let app = express();
const dontenv = require("dotenv");
const mongoose = require('mongoose');
const router = require("./Router.js");
const DB = 'mongodb://localhost:27017/hello?readPreference=primary&ssl=false';
const ExcelModule = require('./Excel.js');
var cors = require('cors');
dontenv.config();
let PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/api',router);




// async function startDB(){
//     try{
//         mongoose.connect(DB,{useUnifiedTopology:true,useNewUrlParser:true})
//         app.listen(PORT,()=>{console.log("срединение с БД успешна")})
//     }catch(err){
//         console.log(err);
//     }
// }


async function startDB(PORT,DB){
    try{
        mongoose.createConnection(DB,{useUnifiedTopology:true,useNewUrlParser:true})
        app.listen(PORT,()=>{console.log("срединение с БД успешна")})
    }catch(err){
        console.log(err);
    }
}

startDB(PORT,DB);
// startDB(5500,'mongodb://localhost:27017/?readPreference=primary&ssl=false');