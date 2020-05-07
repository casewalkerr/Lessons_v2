function checher(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    let sumValue = (minValue + maxValue);
    return (sumValue > 1000);
}
console.log(checher([34,2113,23,1]));