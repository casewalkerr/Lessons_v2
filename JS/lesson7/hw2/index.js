const reverseArray = array => {
    if(!Array.isArray(array)) 
    return null;
    const reverA = array.slice();
    return reverA.reverse();
}
console.log(reverseArray([2,5,1,65,34,24]));