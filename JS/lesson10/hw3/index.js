// input: num;
// output: arr;
// 1 округлить числа до numCount 
// 2 вернуть массив 
const superRound = (num, n) => [
    Math.floor(num * (n * 100)) / (n * 100),
    Math.round(num * (n * 100)) / (n * 100),
    Math.ceil(num * (n * 100)) / (n * 100),
    Math.trunc(num * (n * 100)) / (n * 100),
    +num.toFixed(n),
]
console.log(superRound(2.18386, 2));