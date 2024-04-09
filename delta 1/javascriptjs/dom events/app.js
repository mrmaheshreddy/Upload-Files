// let btn=document.querySelector("button");
// console.dir(btn)

let btns=document.querySelectorAll("button")
for( btn of btns){
    // console.dir(btn)
    // btn.onclick=sayhello;
    // btn.onmouseenter = function(){
    //     console.log("you entered with mouse")
    // }

    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayname);
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked me")
    });

}

btn.onclick=sayhello
// for(btn in btns){
//     btn.onclick = sayhello;   
//     // remember in sayhello dont keep () beacuse if we it will execeute first
    
//     btn.onmouseenter=function(){
//         console.log("you entered a button")
//     };
//     console.dir(btn);
// }

// for( let i=0;i<btns.length;i++){
//     console.dir(i);
// }


// btn.onclick=function(){
//     console.log("button was clicked")
//     // alert("button was clicked")
// }

function sayhello() {
    alert("hello");
}

function sayname() {
    alert("mahesh");
}
