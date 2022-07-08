const add = function(a=0, b=0) {
    return a + b;
}
const addArrow2 = (a=0, b=0)=> {
    return a+b;
}
const addArrow1 = (a=0, b=0)=> a + b;

const arr = [1,2,3,4,5];
const arr2 = arr.map(item => item*2);
const sum = arr.reduce((a,b)=>a+b)

console.log(arr2)
console.log(sum)


// console.log(addArrow(1,2))