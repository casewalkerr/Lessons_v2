// input: num;
// output: arr;
// 1 округлить числа до numCount 
// 2 вернуть массив 
// const superRound = (num, n) => [
//     Math.floor(num * (10 ** n)) / (10 ** n),
//     Math.round(num * (10 ** n)) / (10 ** n),
//     Math.ceil(num * (10 ** n)) / (10 ** n),
//     Math.trunc(num * (10 ** n)) / (10 ** n),
//     +num.toFixed(n),
// ];
const superRound = (num, n) => [
    Math.floor(num * Math.pow(10, n)) / Math.pow(10, n),
    Math.round(num * Math.pow(10, n)) / Math.pow(10, n),
    Math.ceil(num * Math.pow(10, n)) / Math.pow(10, n),
    Math.trunc(num * Math.pow(10, n)) / Math.pow(10, n),
    +num.toFixed(n),
];
console.log(superRound(4.8376543, 5));