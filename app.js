// ele.innerHTML = "Hello World"
// ele.innerHTML = "Hello people"
// const ele = document.getElementsByClassName("list")
// const ele = document.querySelectorAll("ul")

// console.log(ele)

// const todos = ['Eat Food','Go for a run',"Workout",'sleep']
// todos.map(todo=>{
//     const toAdd = document.createElement('li')
//     // const text = document.createTextNode(todo)
//     // toAdd.appendChild(text)
//     toAdd.innerHTML = todo
//     list.appendChild(toAdd)
// })

// ele.innerHTML="modified by javscript"
// ele.style=`
// color:dodgerblue; 
// font-size:30px;
// font-family:Metropolis
// `
// ele.classList.add("new-class")
// ele.classList.add("nsomething")
// ele.classList.remove("new-class")
// console.log(ele.classList)

const timer = document.querySelector('#timer')
const secondHand = document.querySelector('div.second')
let time =0;
const t = setInterval(()=>{ 
    time++;
    secondHand.style=`transform:rotate(${time*6}deg)`
    timer.innerHTML=time;
},1000)

const list = document.querySelector('ul')

fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(todos=>{
    todos.map(todo=>{
    const toAdd = document.createElement('li')
    // const text = document.createTextNode(todo)
    // toAdd.appendChild(text)
    toAdd.innerHTML = todo.title
    list.appendChild(toAdd)
})
})

