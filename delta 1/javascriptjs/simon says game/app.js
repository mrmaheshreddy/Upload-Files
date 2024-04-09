let gameseq=[];
let userseq=[];


let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started")
        started=true;
    }

    levelUp();
})




function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    btnFlash();
}


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}