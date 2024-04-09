function saveToDb(data){
    return new Promise((resolve,reject)=>{

        let internetSpeed= Math.floor(Math.random()*10)+1;
        if(internetSpeed >4){
            resolve("success : data was saved");
        }
        else{
            reject("failure : network issue");
        }



    })
}

// let request=saveToDb("mahesh reddy")  // request=promise object

// request
//     .then(()=>{
//         console.log("promise was resolved");
//         console.log(request)
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//         console.log(request)
//     });


//promise
//pending
//fulfilled / rejected

let futureCondition=true;

//create a promise
let promiseObj=new Promise((resolve,reject) => {

    if(futureCondition==true){
        resolve("promise fulfilled");
    }
    else{
        reject("promise rejected");
    }
});


// consume the promise

promiseObj
.then((message)=> console.log(message)) 
.catch((error)=> console.log(error)) 



// using setTimeOut

let promiseObj1=new Promise((resolve,reject) => {

    if(futureCondition==true){
        setTimeout(()=>{
            resolve("promise fulfilled");
        },3000);
        
    }
    else{
        setTimeout(()=>{
            reject("promise rejected");
        },4000);
        
    }
});


//  PROMISE EXAMPLE 2

let areYouFree=true;

//you create promise
let callFriend=new Promise((resolve,reject)=>{
    if(areYouFree==true){
        setTimeout(()=>{
            resolve("hello,,,, how are you!!!");
        },10000)
    }
    else{
        setTimeout(()=>{
            reject("Ok call you later!!!!");
        },5000)
    }
});

//your friend consumes profit
callFriend
.then((message)=> console.log(message))
.catch((e)=> console.log(e))



// we consume the promises from apis



//   EXAMPLE-3  chain of promises 

let getFirstRank=true;
let condition2=true;

//promise-1

let getFirstRankPromise=new Promise((resolve,reject)=>{
    if(getFirstRank==true){
        setTimeout(()=>{
            resolve("Dad...I got first rank");
        },3000)
    }
    else{
        setTimeout(()=>{
            reject("sorry dad i will try next time");
        },3000)
    }
});

//promise-2

let giftFromDadPromise=new Promise((resolve,reject)=>{
    if(condition2==true){
        setTimeout(()=>{
            resolve("Dear son here is your gift");
        },6000)
    }
    else{
        setTimeout(()=>{
            reject("Better luck next time dear son");
        },6000)
    }
});



// consuming the promises

getFirstRankPromise
.then(message=>{
    console.log(message);
    return giftFromDadPromise;
})

.then(message=>{
    console.log(message)
})
.catch(error=>{
    console.log(error)
})

