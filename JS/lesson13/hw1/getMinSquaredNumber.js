
export const getMinSquaredNumber = arr => {
    if(!Array.isArray(arr) || arr.length == 0) return null;
    return Math.pow(Math.min(...arr.map(el => Math.abs(el))), 2);
}

// console.log(getMinSquaredNumber([4,-65, 5, 777]));