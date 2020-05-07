function cloneArr(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    return arr.slice();
}
console.log(cloneArr([3,4,5,6]));