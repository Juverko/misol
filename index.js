const request = require('request');
const dotenv = require("dotenv");
const http = require('http');
const Emitter = require('events');
const { accepts } = require('express/lib/request');
const emitter = new Emitter();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const URL_DB = `mongodb://localhost:27017/?readPreference=primary&ssl=false`;
const Post = require('./schema.js');
const router = require('./Router.js');
app.use(express.json());
app.use('/api',router);
PORT = 5000;
dotenv.config(); 
var answer = {};
let ch = 0;
    emitter.on("misol",(mass1,nameLength)=>{ 
      if(ch==nameLength){
        ch=0; 
        emitter.once('misol1',(ar1)=>{
          if(ar1==true){ 
            console.log(mass1);
            emitter.emit('send',mass1,'localhost:5000/api/post');
          }else{
            console.log('без изменений');
          }
        })
          console.log(mass1);
          console.log(mass);
          emitter.emit('misol1',changeElem(Object.entries(mass1),Object.entries(mass))); 
      }
    }); 
  let names = ['ethereum',"tether","usd-coin","binance-usd","shiba-inu","dai","wrapped-bitcoin", "leo-token","okb","ftx-token","chainlink","cronos","uniswap","chain","frax","decentraland","the-sandbox","cardano","solana","polkadot","dogecoin"]; 
    
 
  let mass={
    ethereum: { usd: 1552.99 },
    solana: { usd: 31.13 },
    cardano: { usd: 0.482171 },
    dai: { usd: 1 },
  }
 
getReq(`http://localhost:5000/api/getLast`); 
  function getReq(getUrl){
      request({
        method: 'GET',
        url: getUrl,
        qs: {
          param: 'edit',
          value: 100
        }
      }, 
      function (error, response, body) { 
        if(body==null){
          if (!error && response.statusCode == 200) { 
            let res = JSON.parse(body); 
            mass =  res.value;
            emitter.emit('m1',(res.value,true));
          }
        }else{
          emitter.emit('m1',(mass,false));
        }
  }) 
      emitter.on('m1',(el,status)=>{
        if(status){
          mass = el;
        } 
        setInterval(()=>{
          names.forEach(el=>{
            getTokens(el);
          });
        },100000)
      })   
  } 
  async function getTokens(tokenId){
    let url = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`; 
    request({
          method: 'GET',
          url: url,
          qs: {
            param: 'edit',
            value: 100
          }
        }, 
        function (error, response, body) {
        if (!error && response.statusCode == 200) { 
          let res = JSON.parse(body);
          answer[Object.keys(res)] = Object.values(res)[0];
          ch++; 
           emitter.emit('misol',answer,names.length);  
        }
      }) 
    }
    function changeElem(m1,m2){
      res = false;
      m2.forEach(elem=>{ 
        m1.map(el=>{
          if(el[0]==elem[0] && el[1].usd!=elem[1].usd){  
            res = true;
          }
        }) 
      }) 
      if(res){
        mass = m1.reduce(function(acc,cur,i){
          acc[cur[0]] = cur[1];
          return acc;
        },{});
      }
        
      return res;
    } 

    async function startApp(){
      try{
        await mongoose.connect(URL_DB,{useUnifiedTopology:true,useNewUrlParser:true}); 
        app.listen(PORT,()=>{console.log('SERVER in PORT '+PORT)})
      }catch(e){
        console.log(e);
      }
    }
    startApp();  

    
emitter.once('send',(data,url)=>{
  request({
    url: 'http://localhost:5000/api/post',
    method: 'POST',
    json: {tName:new Date(),value:data}
  }, function(error, response, body){
    console.log(body);
  });
})
