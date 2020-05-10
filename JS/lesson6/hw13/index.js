function uniqueCount(array){
    if(!Array.isArray(array))
    return null;
    const uniqueS = [...new Set(array)];
    return uniqueS.length;
}
console.log(uniqueCount([3,5,67,4,4,3,76,34,6]));