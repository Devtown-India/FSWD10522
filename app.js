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

const Car = function(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    return this
}

const car1 = new Car("Mercedes Benz","GTR pro",2022);
console.log(car1)