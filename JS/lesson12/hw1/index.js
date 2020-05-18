// input: str;
// output: str reverse;

const reverseString = str => {
    if( typeof str !== 'string') return null;
     return str.split('').reverse().join('');
}
console.log(reverseString('reverse string'));