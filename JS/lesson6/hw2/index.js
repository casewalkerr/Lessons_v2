function squareArray(arr){
    if(!Array.isArray(arr)) {
        return null;
    }
    let squareArray = [];
    for(let i = 0; i < arr.length; i++){
        squareArray.push(arr[i] * arr[i]);
    }
    return squareArray;
}
const arr = [23,43,56]
console.log(squareArray(arr));