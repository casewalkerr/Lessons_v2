'use strict';

// input: function
// output: function witch saves all calls and contecst 
 export function saveCalls (func) {
    withMemory.calls = [];
    function withMemory (...args){
        withMemory.calls.push([...args]);
        return func.call(this, args);
    }
    return withMemory;
}


// function test (a,b) {
//     return Math.sqrt(a * a + b * b);
// }

// const testWithMemory = saveCalls(test);
// testWithMemory(4, 2);
// testWithMemory(9, 1);


// console.log(testWithMemory.calls) //[[4, 2], [9, 1]]
// /* Поддержка функции с контекстом */

// const user = {
//     name: 'john',
//     sayHi(){
//         return this.name
//     }
// };

// const methodWithMemory = saveCalls(user.sayHi);

// console.log(methodWithMemory.apply({name:'Tom'})); // 'Tom'

// console.log(methodWithMemory.calls); // [[]]

