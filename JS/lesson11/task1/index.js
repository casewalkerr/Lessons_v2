// input: str,num;
// output: str;
// 1 вернуть null если 1 arg не строка
// 2 строку делим на куски, закидываем в массив и сделать первый символ большим 'sfsd', 2 => ['Sf', 'Sd']
// 3 склеить элементы массива ['Sf', 'Sd'] => 'Sf/n Sd'
const splitText = (str, len =10) =>{
    if(typeof str !== 'string') return null;
    const arrstr = [];
    let startPosition = 0;
    while(true) {
        let splitText = str.substr(startPosition,len);   
        if(splitText.length === 0) {                     
            break;
        }
        arrstr.push(splitText[0].toUpperCase() + splitText[1].slice());    
        startPosition += len;        
    }
    return arrstr.join('\n');
}
 
console.log(splitText('adsffgtrghgd', 3 ));