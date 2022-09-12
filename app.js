
let allData = data;
let infBl = document.querySelector(".infoBlock");

data.dmain.dinfoBlock.forEach(el=>{
    creatMainBlock(el,infBl);
})

let infoBlock = document.querySelectorAll(".content>.row>.infoBlock>div");

creatMap(data);


let ch=0;
infoBlock.forEach(block=>{
    block.addEventListener("click",function(){
        let more = document.querySelector(".more");
        ch++;
        document.querySelector(".headerInfo").innerHTML = `${block.children[0].innerHTML} Республики Таджикистан`;
        checkBlockStatus(this,data.dmain.dinfoBlock,more,data);
        more.style.opacity = "0";
        if(ch%2!=0){  
            more.style.height = "auto";
            for(let i=0;i<more.children.length;i++){
                more.children[i].style.display = "block";
            }
            window.scrollTo(0,more.scrollHeight);
            more.style.opacity = "1";
        }else{
            more.style.height = "0";
            for(let i=0;i<more.children.length;i++){
                more.innerHTML = null;
                document.querySelector(".headerInfo").innerHTML = null;
            } 
            window.scrollTo(0,0);
        }
        let moreInfoBlock = document.querySelectorAll(".more>div");
        moreInfoBlock.forEach(el=>{
            el.addEventListener("click",function(){
                let infoContainer = document.querySelector(".infoContainer");
                infoContainer.style.display ="flex";
                checkBlockStatus(this,data.dmain.dinfoBlock,infoContainer); 
                window.scrollTo(0,infoContainer.scrollHeight+more.scrollHeight);  
            })
        })
    })
})


document.querySelector(".showRepInfo").addEventListener("click",()=>{
    showRepubInfo();
})

