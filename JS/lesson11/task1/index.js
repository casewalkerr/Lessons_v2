// input: str,num;
// output: str;
// 1 вернуть null если 1 arg не строка
// 2 строку делим на куски и закидываем в массив и сделать первый символ большим
// 3 склеить элементы массива 
const splitText = (str, len =10) =>{
    if( typeof str !== 'string') return null;
    const strArr = [];
    let startPositon = 0;
    while(true) {
        let chunk = str.substr(startPositon, len);
        if(chunk.length ===0) {
            break;
        }
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPositon += len;
    }
    return strArr.join('\n');
}
 
console.log(splitText('adsffgtrghgd', ));