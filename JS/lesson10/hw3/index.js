// input: num;
// output: arr;
// 1 округлить числа до numCount 
// 2 вернуть массив 
const superRound = (num, n) =>  [
    Math.floor(num * n) / n,
    Math.round(num * n) / n,
    Math.ceil(num * n) / n,
    Math.trunc(num * n) / n,
    +num.toFixed(n)
]
console.log(superRound(2.4555, 2));