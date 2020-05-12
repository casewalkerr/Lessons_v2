const squareArray = array => {
    if(!Array.isArray(array))
    return null;
    return array.map(num => num *num);
}
console.log(squareArray([3, 4, 5, 6]));