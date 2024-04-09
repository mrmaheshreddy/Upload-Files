const sum= (a,b) => a+b;
const mul= (a,b) => a*b;
const sub= (a,b) => a-b;
const g=9.8;
const PI=3.14;

let obj={
    sum : sum,
    mul : mul,
    sub : sub,
    g : g,
    PI : PI,
}

//  or
// module.exports={
//     sum : sum,
//     mul : mul,
//     sub : sub,
//     g : g,
//     PI : PI,
// }
// or
// module.exports.sum= (a,b) => a+b;
// module.exports.mul= (a,b) => a*b;
// module.exports.sub= (a,b) => a-b;
// module.exports.g=9.8;
// module.exports.PI=3.14;



module.exports=obj;