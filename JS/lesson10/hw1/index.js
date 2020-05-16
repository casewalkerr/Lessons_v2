// input: arr;
// output: string;
// 1 посчитать сумму чисел в массиве метод reduce
// 2 округлить сумму в меньшую сторону Math.floor() до 2-х знаков 
// 3  вернуть в формате '$15.43'
const getTotalPrice = arr =>{
    let sum = arr.reduce((acc, num) => acc + num);
    let roundAmount = Math.floor(sum * 100) / 100;
    return '$' + roundAmount;
    
}
console.log(getTotalPrice([3, 5, 65, 76, 345]));