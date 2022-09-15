function checkBlockStatus(block,arr,parentBlock){
    console.log(arr);
    if(parentBlock.className=="more infoBlock"){
        arr.forEach(elem=>{
            if(block.getAttribute("data-id")==elem.id){
                elem.data.forEach(el=>{
                    creatMainBlock(el,parentBlock);
                })
            }
        })
    }else if(parentBlock.className=="infoContainer"){
        document.querySelector(".headerinfoContainer").innerHTML = block.getAttribute("data-context");
        parentBlock.innerHTML= `<a class="close">X</a>`;
        let menu = document.createElement("ul");
        menu.classList.add("menu");
        let list = document.createElement("li");
        arr.forEach(elem=>{
            if(elem.id==block.getAttribute("data-id").slice(0,3)){
                console.log(elem);
                elem.data.forEach(el=>{
                    if(block.getAttribute("data-id")==el.id){ 
                        el.data.forEach(elem=>{
                            list.innerHTML+=`<a data-id="${elem.id}">${elem.ru}</a>`;
                        })
                        let st = setTimeout(()=>{
                            document.querySelectorAll(".menu li a").forEach(ele=>{
                                ele.addEventListener("click",function(){ 
                                        el.data.forEach(el=>{
                                            if(this.getAttribute("data-id")==el.id){
                                                if(document.querySelector(".infoContainerMore")){
                                                    document.querySelector(".infoContainerMore").remove(); 
                                                }
                                                createMore(el.dataType,parentBlock,el.data); 
                                            }
                                        })
                                })
                            })
                            clearTimeout(st);
                        },1000)
                    }
                })
            } 
        })
        menu.appendChild(list);
        parentBlock.appendChild(menu);
        document.querySelector(".close").addEventListener("click",function(){
            window.scrollTo(0,document.querySelector(".more").scrollHeight);
            parentBlock.innerHTML = null;
            document.querySelector(".headerinfoContainer").innerHTML =null;
            let st = setTimeout(()=>{
                parentBlock.style.display = "none";
                clearTimeout(st);
            },350)
            
        }) 
    }
    
}

function creatMainBlock(arrEl,parentBlock){
    let elem = document.createElement("div");
    elem.setAttribute("data-id",arrEl.id);
    elem.setAttribute("data-context",arrEl.ru);
    elem.innerHTML+=`
    <span>${arrEl.ru}</span>
    <img src="${arrEl.img}" alt="icon">
    `;
    elem.style.backgroundImage = `url(${arrEl.bgImg})`;
    elem.classList.add(arrEl.className);
    parentBlock.appendChild(elem);

    
}

function dataFetch(a){
    // fetch for datas!!!
}

function createMore(dataType,parentBlock,data){ 
        let block = document.createElement("div"); 
        block.classList.add("infoContainerMore");
        if(data[0].id!=undefined){
            let menu = document.createElement("ul");
            data.forEach(element => {
                menu.innerHTML += `<li><a data-id="${element.id}">${element.ru}</a></li>`
            });
            block.appendChild(menu);    
        }
        if(dataType=="table"){
            let st = setTimeout(()=>{
                let table = document.createElement("table");
                let convas = document.querySelector(".republicInfo #myChart").cloneNode();
                // let convas1 = document.querySelector(".republicInfo #myChart").cloneNode();
                document.querySelector('.infoContainerMore').appendChild(document.createElement('div')).appendChild(convas);
                // document.querySelector('.infoContainerMore').appendChild(document.createElement('div')).appendChild(convas1);
                console.log(convas); 
                console.log(convas);
                if(data[0].id!=undefined /* &&  */){
                    document.querySelectorAll(".infoContainerMore li a").forEach(el=>{
                        el.addEventListener("click",function(){
                            if(document.querySelector(".infoContainerMore>table")){
                                document.querySelector(".infoContainerMore>table").innerHTML = null;
                            }
                            if(data[0].id.slice(0,5)=="00100"){
                                data.forEach(dEl=>{
                                    if(dEl.id==el.getAttribute("data-id")){
                                        dEl.data.forEach(e=>{ 
                                            table.innerHTML+=`<tr><td><img src="${e.bgImg}"></td><td>${e.ru}</td><td>${e.data[0]}</td></tr>`
                                        }) 
                                    }
                                })
                            }else if(this.getAttribute("data-id")=="001301"){
                                console.log(this);
                                data.forEach(el=>{
                                    if(el.id==this.getAttribute("data-id")){
                                        el.data.forEach(ell=>{
                                            table.innerHTML+=`<tr><td>${ell.ru}</td><td>${ell.res}</td></tr>`;
                                        })
                                    }
                                })
                            }else{ 
                                creatDiag([12,2,3,7,6,11,3,4,5,6,6,7,7,8,9,3],[2022,2021,2020,2019,2018,2017,2016,2015,2014],convas);
                                // creatDiag([2,1,8,5,1,6,1],[2022,2021,2020,2019,2018],convas1);
                                table.innerHTML+=`<tr><td>${data[0].data[0].tableName}</td><td>${data[0].data[0].tableUnit}</td></tr>`;
                                allData.dmain.dinfoBlock[0].data[0].data[0].data.forEach(el=>{
                                    el.data.forEach(ell=>{ 
                                        data.forEach(el=>{
                                            if(this.getAttribute("data-id")==el.id){
                                                el.data.forEach(el=>{
                                                    if(ell.id==el.idBank && el.res>0){
                                                        table.innerHTML+=`<tr><td>${ell.ru}</td><td>${el.res}</td></tr>`;
                                                    }
                                                })   
                                            }
                                        })          
                                    })
                                })

                            }
                        })
                    })
                }else{
                    
                }
                block.appendChild(document.createElement('div')).appendChild(table);
            },1000)
            
        }
        parentBlock.appendChild(block);

    
}

function creatMap(data){
    document.querySelector(".slider .map").innerHTML = data.map.regions;
    showRegRes();
}

function slideCube(ch,elemClick){
    elemClick.addEventListener("click",function(){
        ch++;
        // console.log(elemClick);
        let box = document.querySelector(".box");
        switch (ch) {
            case 1:box.style.transform = 'scale(1.3) rotateX(-90deg)';break;
            case 2:box.style.transform = 'scale(1.3) rotateX(0deg) rotateY(-90deg)';break;
            case 3:box.style.transform = 'scale(1.3) rotateX(-180deg)';break;
            case 4:box.style.transform = 'scale(1.3) rotateY(90deg)';break;
            case 5:box.style.transform = 'scale(1.3) rotateY(0deg) rotateX(90deg)';break;
            default:box.style.transform = 'scale(1.3) rotateY(0deg) rotateX(0deg)';
            ch=0;
            break;
        }
    })

    let tds = document.querySelectorAll(".cube td:first-child");
    tds.forEach(el=>{
        if((el.innerText.length-el.children[0].innerText.length)>5){
            el.style.fontSize = "13px";
            el.style.lineHeight = "13px";
        }
    })
}

slideCube(0,document.querySelector(".box"));

function showRepubInfo(){
    let repInfo = document.querySelector(".republicInfo");
    document.querySelector(".republicBox").innerHTML = createStand();
    repInfo.style.display = "block";
    document.querySelector(".headerRepublicInfo").innerText = `${document.querySelector(".showRepInfo").innerText} на 30.05.2022`;
    let tds = document.querySelectorAll(".republicInfo td:first-child");
    // console.log(tds);
    tds.forEach(el=>{ 
        if((el.innerText.length-el.children[0].innerText.length)>5){
            el.style.fontSize = "13px";
            el.style.lineHeight = "13px";
        }
    })
    setTimeout(()=>{
        repInfo.style.marginLeft = '0';
        let close = document.createElement("a");
        close.classList.add("close");
        close.innerText="X";
        close.addEventListener("click",function(){
            repInfo.style.marginLeft = '-100%';
            document.querySelector(".republicBox").style.animation = "misol 40s linear infinite";
        })
        repInfo.appendChild(close);
    },500)
    let ch = 0;
    document.querySelectorAll(".prev,.next").forEach(el=>{
        el.addEventListener('click',()=>{
            if(el.className=="prev"){
                ch-=45;
            }else{
                ch+=45;
            }
            if(ch>2500){ch=2500}else if(ch<-2500){ch=-2500}
            document.querySelector(".republicBox").style.transform=`perspective(2500px) rotateY(${ch}deg)`;
            document.querySelector(".republicBox").style.animation = "none";  
        })
    })
    repInfo.addEventListener("wheel",(e)=>{
        let repBox = document.querySelector(".republicBox");
        e.preventDefault();
        ch+=(e.deltaY/2.222);
        if(ch>2500){ch=2500}else if(ch<-2500){ch=-2500}
        repBox.style.transform=`perspective(2500px) rotateY(${ch}deg)`;
        repBox.style.animation = "none";
    })
    document.querySelectorAll(".republicBox>span").forEach(el=>{
        el.addEventListener("mouseover",function(){
            // console.log(this.children[0].children[0].innerText);
            document.querySelector(".headerRepublicInfo").innerText = `${this.children[0].children[0].innerText} на 30.05.2022`;
        });
        el.addEventListener("click",function(){
            let moreRepInfo = document.querySelector(".moreRepublicInfo");
            hide(document.querySelector(".republicInfo>.close"));
            console.log(document.querySelector(".republicInfo>.close"));
            moreRepInfo.style.display = "block";
            let close = document.createElement("a");
            close.classList.add("close");
            close.innerText="X";
            moreRepInfo.appendChild(close);
            setTimeout(()=>{
                moreRepInfo.style.marginTop = "0";
                close.addEventListener("click",function(){
                    moreRepInfo.style.marginTop = "-100%";
                    show(document.querySelector(".republicInfo>.close"));
                })
                document.querySelector(".moreHeaderBlock").innerText = el.children[0].children[0].innerText;
                let tr = el.children[0].children[1].children[0].children[0].children;
                document.querySelector(".moreRepublicInfo .menu").innerHTML=null;
                for(i=0;i<tr.length;i++){
                    console.log(tr[i].children[0].innerText);
                    document.querySelector(".moreRepublicInfo .menu").innerHTML+=`<li><a>${tr[i].children[0].innerText}</a></li>`;
                }
                creatDiag([12,2,3,7,6,11],[2022,2021,2020,2019,2018],document.querySelector('.republicInfo #myChart'));
                    
            })
        })
    });
}

function hide(block){
    block.style.display = "none";
}
function show(block){
    block.style.display = "block";
}
function showRegRes(){
    let regPath = document.querySelectorAll(".map path");
    regPath.forEach(path => {
        path.addEventListener("mouseover",function(){
            let regId = this.getAttribute("data-id");
            data.disrict.forEach(dis=>{
                if(dis.id==regId){
                    document.querySelector(".headerCube").innerText = `Экономмические показатели ${dis.name}`
                    let disData = data.dmain.dinfoBlock[0].data[5].data[0].data[1].data;
                    // console.log(disData);
                    disData.forEach(credDis=>{
                        // console.log(credDis.disId);
                        if(regId==credDis.disId){
                            console.log(credDis);
                            let trs = `<tr>`;
                            credDis.data.forEach(res => {
                                console.log(res);
                                trs += `<td>${
                                    res[0]}<span></span></td><td>${res[1]}<span></span></td></tr>`;
                            });
                            // trs+="</tr>";
                            document.querySelector("#front").innerHTML = `<p class="cardName">Credits</p><table class="cardData">${trs}</table>`;
                        }
                    })
                    document.querySelector(".showRepInfo").addEventListener("mouseover",()=>{
                        document.querySelector(".headerCube").innerText = `Экономмические показатели Республики Таджикистан`;
                    })
                }
                slideCube(1,path);
            })
        })
    });
}
function createStand(){
    let res = "";
    let datas = data.dmain.dinfoBlock.map(el=>{
        if(el.id=="005"){return el.data}
    }).filter(el=>{return el});
    datas=datas[0];
    console.log(datas);
    for(i=0;i<datas.length;i++){
        let span = `<span style="--i:${i+2};"><div><p class="repBoxHeader">${datas[i].ru}</p><div class="repBoxBlock"><table class="cardData">`;
        for(j=0;j<datas[i].data.length;j++){
            console.log(datas[i].data[j].data[0][1]);
            span+=`<tr><td>${datas[i].data[j].ru}<span></span></td><td>${datas[i].data[j].data[0][1]}<span>${datas[i].data[j].unit.ru}</span></td></tr>`;
        }
        span+=`</table></div></div></span>`;
        res += span;
    }
    return res;
}

function creatDiag(data,arguments,parentBlock){
    const myChart = new Chart(parentBlock, {
        type: 'bar',
        data: {
            labels:arguments,
            datasets: [{
                label: 'Сравнительная диаграмма показателей',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}