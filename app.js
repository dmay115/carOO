class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        return `The vehicle is a ${(this.make)} ${(this.model)} from ${(this.year)}`;
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    };

    add(arr){
        if (this.capacity === 0){
            console.log('Garage Full');
            return;
        }
        if (!(arr instanceof Vehicle)){
            console.log('Only vehicles are allowed in here!');
            return;
        } else {
            (arr instanceof Vehicle)
            this.vehicles.push(arr);
            this.capacity -= 1
            console.log("Vehicle Added!")
        };
    };
};
let myFirstVehicle = new Car('Nissan', 'Versa', '2021');