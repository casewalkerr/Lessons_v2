
class Vehicle {
    constructor(name, numberOfWheels){
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }

    move() {
        console.log(`${this.name} is moving`)
    }
    stop() {
        console.log(`${this.name} stopped`)
    }
}

class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed){
        super(name, numberOfWheels)
        this.maxSpeed = maxSpeed; 
    }
    move() {
        console.log(`${this.name} liftting anchor up`)
        super.move();
    }

    stop() {
        super.stop();
        console.log(`${this.name} liftting anchor down`)
    }
}

const ship1 = new Ship('Argo', 0, 43);
ship1.move();
ship1.stop();
console.log(ship1);
export { Vehicle, Ship}