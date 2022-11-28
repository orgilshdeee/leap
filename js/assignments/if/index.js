// let a1 = 96;
// let a2 = 108;
// let a3 = 89;
// let b1 = 88;
// let b2 = 91;
// let b3 = 110;

// if(averageOfA > averageofB){
//     console.log("A team wins")
// }else if(averageOfA === averageofB){
//     console.log("Both Team Draws")
// }else{
//     console.log("B team wins")
// }

let a1 = 97;
let a2 = 112;
let a3 = 101;
let b1 = 109;
let b2 = 95;
let b3 = 123;

let averageOfA = a1+a2+a3/3
let averageofB = b1+b2+b3/3

if(averageOfA > averageofB && averageOfA >= 100){
    console.log("A team wins")
}else if(averageOfA < averageofB && averageofB>=100){
    console.log("B team wins")
}else if(averageOfA === averageofB && averageOfA >=100 && averageofB >=100){
    console.log("both team draws")
}else{
    console.log("No one wins the trophy")
}