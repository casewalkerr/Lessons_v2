function checher(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    let sumValue = (minValue + maxValue) > 1000;
    return sumValue;
}
console.log(checher([34,1333,23,1]));