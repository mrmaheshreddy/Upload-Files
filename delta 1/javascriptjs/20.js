let student={
    name:"mahesh",
    age:20,
    rollno:"67B4",
    eng:90,
    hin:94,
    math:99,

    getavg(){
        let res=(this.eng+this.hin+this.math)/3;
        console.log(res)
        console.log(`${this.name} got avg of ${res}`)
    }
};



// try and catch

console.log("one");
try{
    console.log(a);
}
catch(e){
    console.log("a is not defined");
    console.log(e)
}
console.log("three")


// arrow functions

const sum=(a,b)=>{
    console.log(a+b)
}

// setTimeout

console.log("hi")

setTimeout(()=>{
    console.log("Apna College");
},4000);
console.log("welcome to ");

// this with arrpw functions

let one={
    name:"mahesh",
    marks:90,
    prop:this, //global scope
    getName: function(){
        console.log(this)
        return this.name;
    },

    getMarks: () =>{
        console.log(this)
        return this.marks
    }
}

// arrow function returns square of a number

const square=(a)=>{
    console.log(a*a)
}

// function that prints "hello world" 5 times at intervals of 2 secs
let id=setInterval(()=>{
    console.log("hello world")
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);

