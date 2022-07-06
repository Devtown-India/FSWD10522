class Car{
    constructor(model,make){
        this.make = make;
        this.model = model;
    }

    move(){
        console.log("car is moving")
    }
}

const car1 = new Car('BMW','X5');
const car2 = new Car(19);

// console.log(car1.model)
