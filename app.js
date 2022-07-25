// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((todos) => {
//     todos.map((todo) => {
//       console.log(todo.title);
//     });
//   });

const doSomething = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  // for(let i =0;i<1000;i++){
  //     console.log('1');
  // }
};
doSomething();
console.log(3);
