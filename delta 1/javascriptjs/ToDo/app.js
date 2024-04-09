let h1=document.querySelector("h1");
let input=document.querySelector("input")
let btn=document.querySelector("button")
let ul=document.querySelector("ul")

let res=btn.addEventListener("click", function(){

    let item=document.createElement("li")
    item.innerText=input.value

    let delbtn=document.createElement("button")
    delbtn.innerText="delete"
    delbtn.classList.add("delete")

    ul.appendChild(item);
    input.value="";

    item.appendChild(delbtn)
    //console.log("button clicked")
})


// let delbtnp=document.querySelectorAll(".button")

// for(i of delbtnp){
//     i.addEventListener("click",function(){
//         let totalbuttondelete = i.parentElement;
//         totalbuttondelete.remove();
//     })
// }

// event delegation

ul.addEventListener("click",function(event){
    //console.log("button clicked")
    //console.dir(event.target.nodeName)
    if(event.target.nodeName == "BUTTON"){
        let item=event.target.parentElement;
        item.remove();
        console.log("deleted");
    }
});