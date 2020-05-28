
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
    move() {
        console.log(`${this.name} liftting anchor up`)
        this.move();
    }

    stop() {
        this.stop();
        console.log(`${this.name} liftting anchor down`)
    }
}

export { Vehicle, Ship}