// input: str,str1;
// output: [str];
// 1 вернуть null если 2 arg не строка
// 2 число вхождение 2 arg  в 1
const countOccurrences = (str,substr) => {
    if(substr == '') return null;
    return str.split(substr).length -1;
}
console.log(countOccurences('32fasdfwfffae', 'f'));