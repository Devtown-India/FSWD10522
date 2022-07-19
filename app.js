// ele.innerHTML = "Hello World"
// ele.innerHTML = "Hello people"
// const ele = document.getElementsByClassName("list")
// const ele = document.querySelectorAll("ul")

// console.log(ele)

const list = document.querySelector('ul')
const todos = ['Eat Food','Go for a run',"Workout",'sleep']
todos.map(todo=>{
    const toAdd = document.createElement('li')
    const text = document.createTextNode(todo)
    toAdd.appendChild(text)
    list.appendChild(toAdd)

})

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