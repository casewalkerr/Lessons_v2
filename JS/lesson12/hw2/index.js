// input: arr;
// output: arr => arr[$ num] ;
// 1 отфильтровать массив
// 2 добавить $ и сделать 2 знака после запятой
const cleanTransactionsList = arr => 
    arr.filter(num => isFinite(num))
    .map(num => '$' + (+num).toFixed(2))

console.log(cleanTransactionsList([' 54.544', ' 4.34', '4fdsd', '88']))