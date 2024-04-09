// array method 

// 1) forEach
let arr=[1,2,3,4]

let print=function(el){
    console.log(el);
}

arr.forEach(print)

// alternate method
arr.forEach(function(el){
    console.log(el);
})

// using arrow function
arr.forEach((el)=>{
    console.log(el)
})

// for objects

let arr1=[
    {
        name:"mahesh",
        age:20,
    },
    {
        name:"vamsi",
        age:21, 
    },
    {
        name:"rajesh",
        age:19,
    }
]

arr1.forEach((obj)=>{
    console.log(obj.name)
})

// 2) map FUNCTION

let arr2=[1,2,3,4]

arr2.map((a1)=>{
    console.log(a1*a1);
})

let students=[
    {
        name:"mahesh",
        age:20,
        marks:92,
    },
    {
        name:"vamsi",
        age:21, 
        marks:80,
    },
    {
        name:"rajesh",
        age:19,
        marks:99,
    }
];

let gpa=students.map((e1)=>{
    return e1.marks/10;
});

// doing for each for above one
gpa.forEach((gpavalue)=>{
    console.log(gpavalue)
})


// 3) filter method

let arr3=[2,4,6,8,3,5,7,9,10,16,18,19,17,12]

let ans = arr3.filter((e2)=>{
    return (e2%2==0)
})

// 4) Every method(logical AND)   : returns true if every element of array gives true for some function else returns false
let ans1=[1,2,3,4].every((el)=> (el%2==0));
let ans2=[2,46,90].every((el)=> (el%2==0));

// 5) some method(logical OR)

let ans3=[1,2,3,4].some((el=>(el%2==0)));


//   6) Reduce method
// reduces the array to a single value

let arr4=[1,2,3,4,5,6,7,8,9,10]
let finalans=arr4.reduce((res,el)=>{
    //console.log(res)
    return res+el;
});
console.log(finalans)


// finding max in array using reduce

let arr5=[10,20,98,67,89,9]

let max=arr5.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
})
console.log(max)


// practice questions 
// 1.check if all nums in an array are multiples of 10

let arr6=[10,20,30,40,50,60,70,80]

let ans4=arr6.every((el)=> (el%10==0))
console.log(ans4)


// spread === Expands an iterable into multiple values
let arrr=[1,2,3,4,5,6,78,9,0,90]

console.log(...arrr)

// spread using array

let arr7=[1,2,3,4,5,6,78,9,0,90]

let newarr=[...arr7]
console.log(newarr)
let chars=[..."hello"]

let odd=[1,3,5,7]
let even=[2,4,6,8]

let num=[...odd,...even]
console.log(num)


// spread with object literals

let data={
    email:"email@gmail.com",
    password: "loip9089"
};


const dataCopy={...data,id:5678,country:"india"}
console.log(dataCopy)

let obj1={...arr7}
console.log(obj1)
