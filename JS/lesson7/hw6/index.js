const sum = arr => {
    if(!Array.isArray(arr))
    return null;
    return arr.reduce((acc, num) => acc + num);
}
console.log(sum([2, 4, 5, 63,]));