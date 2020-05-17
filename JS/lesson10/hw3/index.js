// input: num;
// output: arr;
// 1 округлить числа до n 
// 2  вернуть массив из 5 элементов метод  map
// 3 вернуть массив заданой длины
const superRound = (num, numCount) =>  [
    Math.floor(num * numCount) / numCount,
    Math.round(num * numCount) / numCount,
    Math.ceil(num * numCount) / numCount,
    Math.trunc(num * numCount) / numCount,
    +num.toFixed(numCount)
]
console.log(superRound(2.4555, 3));