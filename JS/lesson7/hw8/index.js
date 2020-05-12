const arrAverage = arr => {
    if(!Array.isArray(arr)) return null;
    return arr.reduce((a,b) => (a + b)) / arr.length;
}
console.log(arrAverage([4, 5, 6, 76, 34]));