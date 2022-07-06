// class Car{
//     constructor(model,make){
//         this.make = make;
//         this.model = model;
//     }

//     move(){
//         console.log("car is moving")
//     }
// }

// const car1 = new Car('BMW','X5');

const arr = [1,2,3,4,5,6,7,8,9,10];

// const sum = arr.reduce((a,b)=>a+b)
const sum = arr.reduce(function(a,b){
    // console.log(a,b)
    return a*b
})

console.log(sum)

// const newArr = arr.filter((item)=> item % 2 === 0)
// console.log(newArr)

// const ele = arr.find(function(item){
//     return item==10
// })

// const newArr = []

// arr.forEach(function(e){
//     if(e%2 === 0){
//         newArr.push(e);
//     }
// })
