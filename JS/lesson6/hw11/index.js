function includes(array, n){
    for (let arrayInlcude of array) {
        if(arrayInlcude == n) {
            return true;
        }
    }
    return false;
}
console.log(includes([3,4,5,67,8], 5));