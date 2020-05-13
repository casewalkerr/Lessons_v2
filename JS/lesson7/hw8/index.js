const arrAverage = arr => {
    if(!Array.isArray(arr)) return null;
    return arr.reduce((a,b) => (a + b)) / arr.length;
    // let total = 0;
    // for(let i = 0; i < arr.length; i++){
    //     total +=arr[i];
    // }
    // return total / arr.length;
}
console.log(arrAverage([4, 5, 6, 76, 34]));