'use strict';

const ship = {
    name: 'Tit',
    startMachine() {
        console.log(`${this.name} lifting anchor up`)
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`)
    },
 }

function getOwnProps (obj) {
    let prop = [];
    for(let props in obj){
        if(obj.hasOwnProperty(props)){ 
           prop.push(props);
        }
    } 
    return prop.filter(el => typeof obj[el] !== 'function');
}

console.log(getOwnProps(ship))
console.log(Object.keys(ship));

