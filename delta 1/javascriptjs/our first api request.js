let url="https://catfact.ninja/fact"

fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("data-1 :",data.fact)
    return fetch(url);
})

.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("data-2 :",data.fact);
})

.catch((err)=>{
    console.log("ERROR :",err)
})

// using axioms

// let btn = document.querySelector("button")
// btn.addEventListener("click", async ()=>{
//     let facts=await getFacts();
//     //console.log(facts);
//     let p=document.querySelector(".id");
//     p.innerText = facts;

//     // for displaying dog image in html doc
//     // link=await getimage();
//     // let img=document.querySelector("#Result");
//     // img.setAttribute("src",link);

// })

// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log("error-",e);
//     }
// }

// task ---- do with dog images api 


// sending headers with api request

// const url1 = "https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         const config = {headers:{Accept :"application/json"}}; 
//         let res=await axios.get(url1,config);
//         console.log(res.data)
//     }
//     catch(err){
//         console.log("ERROR ",err);
//     }
// }

// activity using query strings 

let url2= "http://universities.hipolabs.com/search?name=";


let btn2=document.querySelector("button")

btn2.addEventListener("click", async ()=>{
    let country=document.querySelector("input").value;
    console.log(country)
    let ans =await  getuniversity(country);
    console.log(ans)
    show(ans);
})

function show(ans){
    for(col of ans){
        console.log(col.name);     
    }
}



async function getuniversity(country){
    try{
        let res=await axios.get(url2+country)
        return res.data
    }
    catch(err){
        console.log("ERROE  :",err);
    }
}