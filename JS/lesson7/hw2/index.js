const reverseArray = array => {
    if(!Array.isArray(array)) 
    return null;
    return array.slice().reverse();
}
console.log(reverseArray([2,5,1,65,34,24]));