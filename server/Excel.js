const Excel = require('xlsx');
const file = Excel.readFile('./file.xlsx');



let data = [];

// for(let i =0;i<sheets.length;i++){
    // console.log(file.SheetNames[0]);
    console.log("++++++++++++++++++++++=============================+++++++++++++");
    // console.info(Excel.utils.sheet_to_html(file.Sheets[file.SheetNames[0]]));
    console.info(Excel.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]));

    for(let key in file.Sheets['chokadiiii']){
        let ele = file.Sheets['chokadiiii'][key];
        // console.log(key);
        // console.log(ele);
        // console.log("==========");
        // console.log(ele);
        // console.log(key);
        data.push({name:key,value:ele.v})
    }
    // let temp = Excel.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
    
    // console.log(temp);
    // temp.forEach((res) => {
    //     data.push(res)
    //  })
// } 
// data.reduce((a,b)=>{
//     console.log(a);
//     // console.log(b);
//     // a[`tr_`+b.name.slice(1)] = b;
//     // return a;
//     if(a[0].name!=false || a[0].name.slice(1)==b.name.slice(1)){

//     }else{
//         a[a.length] = b;
//     }
// },[])
// console.log( data);


let objMass= [];
data.forEach(el=>{
    for(let k in el){
        if(el.region!=undefined){
            // console.log(el);
        }else{
            // console.log(`ошибка  на этой строке ${el["№"]}`);
        }
    }
})

// const numbers = [4, 3, 3, 1, 15, 7, 4, 19, 19,19,12,12,12,17,19,19,19,19,19,19,18]; // исходный массив

// // получаем объект в котором ключ - это элемент массива,
// // а значение - количество вхождений
// // { '4': 2, '3': 2, '1': 1 ... }
// const countItems = numbers.reduce((acc, item) => { ;
//      acc[`st_`+item] = item;
//      return acc; 
// }, {});
// console.log(countItems); 