// input: arr;
// output: arr;
const getParsedIntegers = arr => 
    arr.map(num => Number.parseInt(num));

const getParsedIntegersV2 = arr => 
    arr.map(num => parseInt(num));    

const getParsedFloats = arr => 
    arr.map(num => Number.parseFloat(num));       
    
const getParsedFloatsV2 = arr => 
    arr.map(num => parseFloat(num));  
    
    
    console.log(getParsedFloats([2, null, undefined, Infinity, 6.3, 7.7, '3', '15.4', 'ase4']));
    console.log(getParsedFloatsV2([2, null, undefined, Infinity, 6.3, 7.7, '3', '15.4', 'ase4']));