'use strict';

// input: function
// output: function witch saves all calls and contecst 
function saveCalles (func) {
    withMemory.calls = [];
    function withMemory (...args){
        withMemory.calls.push([...args]);
        return func.call(this, args);
    }
    return withMemory;
}


function test (a,b) {
    return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalles(test);
testWithMemory(4, 2);
testWithMemory(9, 1);


console.log(testWithMemory.calls) //[[4, 2], [9, 1]]
/* Поддержка функции с контекстом */

const user = {
    name: 'john',
    sayHi(){
        return this.name
    }
};

const methodWithMemory = saveCalles(user.sayHi);

console.log(methodWithMemory.apply({name:'Tom'})); // 'Tom'

console.log(methodWithMemory.calls); // [[]]
export {saveCalles}