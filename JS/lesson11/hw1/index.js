// input: str,len;
// output: [str];
// 1 вернуть null если 1 arg не строка
// 2 строку делим на подстроку, закидываем в массив 
// 3 дополняем последнюю подстроку точками до нужного количества символов в подстроке
const splitString =(str,len =10) => {
    if(typeof str !== 'string') return null;
    const splitArr = [];
    let start = 0;
    while(true) {
        let split = str.substr(start, len);
        if(split.length === 0) break;
        if(split.length < len) {
            split += '.'.repeat( len - split.length );
        }
        start += len;
        splitArr.push(split);
    }
    return splitArr;
}
console.log(splitString('3fwettfwaefsfdfкккef3', 5));