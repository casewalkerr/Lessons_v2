'use strict';

const vehicle = {
    name: 'Argo',
    move(){
        console.log(`${this.name} is moving`)
    },
    stop(){
        console.log(`${this.name} stopped`)
    }
}

const ship = {
   startMachine() {
       console.log(`${this.name} lifting anchor up`)
       this.move();
   },
   stopMachine() {
       console.log(`${this.name} lifting anchor down`)
       this.stop();
   },
    __proto__: vehicle
}

ship.move();
ship.stop();
ship.startMachine();
ship.stopMachine();
console.log(ship);
console.log(vehicle);
export {vehicle, ship}