
// const somePromise = new Promise((resolve,reject)=>{
//     const car = {
//         make: 'Ford',
//         model: 'Mustang',
//         year: 1969
//     }
//     setTimeout(()=>{
//         reject("Something went wrong")
//     },3000)
// })

// somePromise
// .then((promiseResult)=>{
//     console.log(promiseResult.year)
// })
// .catch((error)=>{
//     console.log(error)
// })

// console.log(somePromise)

// const response = fetch('http://jsonplaceholder.typicode.com/users')

// response
// .then(dataStream=>dataStream.json())
// .then(jsonData=>console.log(jsonData))
// .catch(error=>console.log(error))

// response
// .then(function(dataStream){
//     return dataStream.json()
// })
// .then(function(jsonData){
//     console.log(jsonData)
// })

const taskThatTakesTime = new Promise((resolve,reject)=>{
    resolve({
        name: 'John',
        age: 30
    })
})

taskThatTakesTime.then(data=>console.log(data))
setTimeout(()=>{
    console.log("settimeout")
})

console.log(1)
for(let i =0;i<1000;i++){
    console.log('hi')
}
