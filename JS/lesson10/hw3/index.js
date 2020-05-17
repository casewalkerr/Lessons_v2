// input: num;
// output: arr;
// 1 округлить числа до numCount 
// 2 вернуть массив 
const superRound = (num, numCount) =>  [
    Math.floor(num * numCount) / numCount,
    Math.round(num * numCount) / numCount,
    Math.ceil(num * numCount) / numCount,
    Math.trunc(num * numCount) / numCount,
    +num.toFixed(numCount)
]
console.log(superRound(2.4555, 3));