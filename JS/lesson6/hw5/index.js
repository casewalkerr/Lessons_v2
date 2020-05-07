function reverseArray(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    return arr.reverse();
}
console.log(reverseArray([34,4,222,5,34,56]));