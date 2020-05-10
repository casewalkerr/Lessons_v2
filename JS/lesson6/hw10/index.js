function getSubArray(array, n){
    let newArray = [];
    for (let i = 0; i < n; i++){
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(getSubArray([7,45,6,2,7], 4));