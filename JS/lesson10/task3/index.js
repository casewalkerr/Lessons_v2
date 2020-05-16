// input: num;
// output: arr;
// 1 округлить число до 2-х знаков разными методами 
// 2 вернуть число в массиве 
const multiRound = num => [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    num.toFixed(2),
    ];
console.log(multiRound(34.7656));