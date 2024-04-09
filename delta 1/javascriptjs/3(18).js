let student={
    name:"mahesh",
    age:20,
    marks:94.4,
};

// let student1=["mahesh",20,94.4]

const item={
    price: 100.90,
    discount: 50,
    colors:["red","pink"],
};

// to get pink use item.colors[1]


// twitter thread post

let twitter={
    username:"pandu_gadu",
    content: "Rt for visibility",
    likes:100,
    retweet:29,
    tags:"#ssmb",

};

// accessing
console.log(twitter.username)

// let prop="retweet"
// console.log(twitter[prop])

const student2={
    name:"maheshreddy",
    age:20,
    marks:98,
    city:"hyderabad",
};

// add/update value
student2.city="mumbai"
student2.gender="male"
student2.marks="A"

delete student2.gender

// nested objects

const classinfo={
    mahesh:{
        rollno:67,
        grade:"A",
    },
    mani:{
        rollno:68,
        grade:"B",
    },
    
    mahi:{
        rollno:69,
        grade:"A+"
    }

};

let num=Math.floor(Math.random()*100)+1
console.log(num)

let num1=Math.floor(Math.random()*5)+1
console.log(num1)