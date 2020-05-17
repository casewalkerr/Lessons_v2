// input: arr;
// output: arr;
// 1 вернуть null если в промежутке нет целых чисел
// 2  найти случайные числа в заданном промежутке
// 3 вернуть массив заданой длины
const getRandomNumbers = (length, start, end) => {
    if(Math.ceil(start) >= Math.ceil(end)) return null;
    return Array(length).fill().map(num => Math.floor(Math.random()* (end - start)) + start);
    // let getrandomN = [];
    // for( i = 0; i < length; i++){
    //     let getran = Math.floor(Math.random() * (end - start + 1)) + start;
    //     getrandomN[i] = getran;
    // }
    // return getrandomN;
}
console.log(getRandomNumbers(53, 3, 76));