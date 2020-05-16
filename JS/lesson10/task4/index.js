// input: arr;
// output: arr;
// 1 проверить массив на массив
// 2 преобразовать все числа по модулю пройдясь по массиву 
// 3  найти максимальное число
const getMaxAbsoluteNumber = arr => {
    if(!Array.isArray(arr)) return null;
    const absoluteValues = arr
    .map(num => Math.abs(num));
    
    return Math.max(...absoluteValues);
}

console.log(getMaxAbsoluteNumber([3, -434.4, 5.5, -6, 7]));