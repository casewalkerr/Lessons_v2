function removeDuplicates(array){
    if(!Array.isArray(array))
    return null;
    let uniqueSet = [...new Set(array)];
    return uniqueSet;   
}
console.log(removeDuplicates([23,2,76,5,4,23,5]));