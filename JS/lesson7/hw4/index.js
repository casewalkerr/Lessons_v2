const cloneArr = arr =>{
    if(!Array.isArray(arr))
    return null;
    const clone = [...arr];
    return clone;
}
console.log(cloneArr([3, 45, 5, 23, 34]));