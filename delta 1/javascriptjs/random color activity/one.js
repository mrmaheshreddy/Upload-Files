// let btn=document.querySelector("button")

// btn.addEventListener("click", function(){
//     let h3=document.querySelector("h3");
//     let res=getColor();
//     h3.innerText=res;

//     let div = document.querySelector("div")
//     div.style.backgroundColor = res;
//     console.log("color updated");
// })


// function getColor(){
//     let red= Math.floor(Math.random()*255);
//     let green= Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let result=`rgb(${red},${green},${blue})`;
//     return result;

// }

let form=document.querySelector("form")

form.addEventListener("submit", function(){
    //console.log("form submitted")
    event.preventDefault();
    
    let user= document.querySelector("#user");
    let pass=document.querySelector("#password")

    let altwayuser= this.element[0];
    let altwaypass=this.elements[1];

    console.log(user.value)
    console.log(pass.value)
})