'use strict';

function sumOfSquares() {
//     return [].reduce.apply(arguments, [(acc, el) =>{
//         return acc + (el * el);
//     }]);
    return [...arguments].reduce((acc,el) => acc + el * el);
};

console.log(sumOfSquares(4, 6, 78, 34));